import { StackScreenProps } from '@react-navigation/stack';
import {Text, View} from 'react-native';
import { RootStackParams } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';

interface Props extends StackScreenProps <RootStackParams,'Detail'> {
  
}


export const DetailsScreen = ({route}:Props) => {
 const {movieId}=route.params;
 const {
  isLoading,
  movieDetail
 }=useMovie(movieId);


  if(!isLoading ){
    return(
      <Text>Cargando....</Text>
    )
  }

  return (
    <View>
      <Text>{movieDetail?.title}</Text>
      <Text>{movieDetail?.description}</Text>
      <Text>carlos</Text>
      <Text>carlos</Text>
    </View>
  );
};
