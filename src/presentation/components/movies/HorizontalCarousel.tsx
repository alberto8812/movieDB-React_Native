

import {FlatList, Text, View} from 'react-native';
import { Movie } from '../../../core/entities';
import { MoviePoster } from './MoviePoster';

interface Props {
  movies:Movie[],
  tittle?:string,
}

export const HorizontalCarousel = ({movies,tittle=''}:Props) => {
  return (
    <View
      style={{
        height: tittle ? 260:220
      }}
    >
      {
        tittle && (

          <Text
          style={{
            fontSize:30,
            fontWeight:'300',
            marginLeft:10,
            marginBottom:10
          }}
          >{tittle}</Text>
        )
      }   
      <FlatList
        data={movies}
        renderItem={({item})=>(
          <MoviePoster movie={item}  width={140} height={200}/>
        )}

        keyExtractor={item=>item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
