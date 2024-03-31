import {Text, View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {ScrollView} from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';
import { FulllScreenLoader } from '../../components/loader/FulllScreenLoader';

export const HomeScreen = () => {
  const {top}=useSafeAreaInsets();
  const {isLoading,nowPlaying,topRate,popular,upComming,popularNextPage} = useMovies();
  if(!isLoading){
    return(<FulllScreenLoader/>)
  }
  return (
    <ScrollView>
      <View
      style={{
        marginTop:top+20,
        paddingBottom:30
      }}
      >
        {/* Principal */}
        <PosterCarousel movies={nowPlaying}/>

        {/* populares */}
        <HorizontalCarousel movies={popular} tittle='Populares' loadNextPage={popularNextPage}/>
        {/* top rate */}
        <HorizontalCarousel movies={topRate} tittle='Top rate'/>
        {/* upcoming */}
        <HorizontalCarousel movies={upComming} tittle='Upcoming'/>
      </View>
    </ScrollView>
  );
};
