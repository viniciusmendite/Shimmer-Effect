import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { StyleSheet } from 'react-native';

import {
    Container,
    HeaderTitle,
    FlatList,
    MovieArea,
    MoviePoster,
    MovieInfo,
    MovieTitle,
    MovieDate,
    MovieSinopse
} from './style';

export default () => {

    const [movies, setMovies] = useState([]);
    const [visible, setVisible] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    fetch('https://filmespy.herokuapp.com/api/v1/filmes')
        .then((response) => response.json())
        .then((response) => {
            setMovies(response.filmes);
            setTimeout(() => {
                setVisible(true)
            }, 3000);
        });

    const MovieList = (item) => {
        return (
            <MovieArea>
                <ShimmerPlaceHolder
                    style={styles.ShimmerPost}
                    autoRun={true}
                    visible={visible}
                    colorShimmer={["#72594e", "#55433b", "#cbaea2"]}
                >
                    <MoviePoster source={{ uri: item.data.poster.replace('http:', 'https:') }} />
                </ShimmerPlaceHolder>

                <MovieInfo>
                    <ShimmerPlaceHolder
                        style={styles.ShimmerTitle}
                        autoRun={true}
                        visible={visible}
                        colorShimmer={["#72594e", "#55433b", "#cbaea2"]}
                    >
                        <MovieTitle>{item.data.titulo}</MovieTitle>
                    </ShimmerPlaceHolder>

                    <ShimmerPlaceHolder
                        style={styles.ShimmerDate}
                        autoRun={true}
                        visible={visible}
                        colorShimmer={["#72594e", "#55433b", "#cbaea2"]}
                    >
                        <MovieDate>{item.data.data}</MovieDate>
                    </ShimmerPlaceHolder>

                    <ShimmerPlaceHolder
                        style={styles.ShimmerSinopse}
                        autoRun={true}
                        visible={visible}
                        colorShimmer={["#72594e", "#55433b", "#cbaea2"]}
                    >
                        <MovieSinopse numberOfLines={3}>{item.data.sinopse}</MovieSinopse>
                    </ShimmerPlaceHolder>
                </MovieInfo>
            </MovieArea>
        );
    }

    const handleRefresh = () => {
        setRefreshing(true);
        setMovies([]);
        fetch('https://filmespy.herokuapp.com/api/v1/filmes')
            .then((response) => response.json())
            .then((response) => {
                setMovies(response.filmes);
            });
        setRefreshing(false);
    }

    return (
        <Container>
            <StatusBar backgroundColor="#72594e" barStyle="dark-content" />
            <HeaderTitle>Lista de Filmes</HeaderTitle>
            <FlatList
                data={movies}
                renderItem={({ item }) => <MovieList data={item} />}
                keyExtractor={(item, index) => item.titulo}
                refreshing={refreshing}
                onRefresh={handleRefresh}
            />
        </Container>
    );
}

const styles = StyleSheet.create({
    ShimmerPost: {
        height: 110,
        width: 80,
        borderRadius: 10
    },
    ShimmerTitle: {
        height: 25,
        borderRadius: 10,
        marginBottom: 5
    },
    ShimmerDate: {
        height: 26,
        width: '70%',
        borderRadius: 10,
        marginBottom: 5
    },
    ShimmerSinopse: {
        height: 45,
        borderRadius: 10
    }
});