import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
flex: 1;
background-color: #72594e;
`;

export const FlatList = styled.FlatList``;

export const MovieArea = styled.View`
flex-direction: row;
margin: 10px;
background-color: #cbaea2;
padding: 10px;
border-radius: 10px;
opacity: 0.8;
transform: translate(0px, 10px);
`;

export const MoviePoster = styled.Image`
width: 80px;
height: 110px;
border-radius: 10px;
`;

export const MovieInfo = styled.View`
flex: 1;
flex-direction: column;
margin-left: 15px;
`;

export const MovieTitle = styled.Text`
font-size: 16px;
font-weight: bold;
color: #55433b;
`;

export const MovieDate = styled.Text`
font-size: 14px;
color: #55433b;
`;

export const MovieSinopse = styled.Text`
color: #55433b;
font-size: 14px;
`;

export const HeaderTitle = styled.Text`
text-align: center;
font-size: 22px;
color: #55433b;
opacity: 0.9;
font-weight: bold;
margin-top: 10px;
margin-bottom:10px;
`;