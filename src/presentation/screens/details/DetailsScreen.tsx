import { StackScreenProps } from '@react-navigation/stack';
import {Text, View} from 'react-native';
import { RootStackParams } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetail } from '../../components/movie/MovieDetail';
import { ScrollView } from 'react-native-gesture-handler';
import { FulllScreenLoader } from '../../components/loader/FulllScreenLoader';

interface Props extends StackScreenProps <RootStackParams,'Detail'> {
  
}


export const DetailsScreen = ({route}:Props) => {
 const {movieId}=route.params;
 const {
  isLoading,
  movieDetail,
  castDetail
  

 }=useMovie(movieId);


  if(isLoading  && !movieDetail){
    return(
      <FulllScreenLoader/>
    )
  }

  return (
    <ScrollView>

      {/* header */}
      <MovieHeader movie={movieDetail!}/>
      {/* detail */}
      <MovieDetail movie={movieDetail!} cast={castDetail!}/>

    </ScrollView>
  );
};
