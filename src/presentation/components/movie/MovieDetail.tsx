import React from 'react';
import {Text, View} from 'react-native';
import {FullMovie} from '../../../core/entities';
import { Fromatter } from '../../../config/helpers/formatter';
interface Props {
  movie: FullMovie;
}

export const MovieDetail = ({movie}: Props) => {

  return (
    <>
      <View style={{marginHorizontal: 20, }}>
        <View style={{flexDirection: 'row'}}>
          <Text>{movie.rating}</Text>
          <Text style={{marginLeft: 5}}>
            - {movie.genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>
      <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
        History
      </Text>
      <Text style={{fontSize:16}}>{movie.description}</Text>
      <Text style={{fontSize:23 , marginTop:23,fontWeight:'bold'}}>Budget</Text>
      <Text style={{fontSize:18 , marginTop:23}}>{Fromatter.currency(movie.budget)}</Text>
      </View>
      <View style={{marginTop:10,marginBottom:100}}>
        <Text
        style={{
            fontSize:23,
            marginVertical:10,
            fontWeight:'bold',
            marginHorizontal:20
        }}
        >
            Actores
        </Text>
      </View>
    </>
  );
};
