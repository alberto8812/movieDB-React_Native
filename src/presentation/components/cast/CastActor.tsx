import {Image, StyleSheet, Text, View} from 'react-native';
import {Cast} from '../../../core/entities/cast.entity';

interface Props {
  actor: Cast;
}

export const CastActor = ({actor}: Props) => {
  return (
    <View style={style.contanier}>
      <Image
        source={{uri:actor.avatar}}
        style={{width:100,height:150,borderRadius:10}}
      />
      <View style={{...style.actorInfo}}>
        <Text style={{fontSize:15,fontWeight:'bold'}} >{actor.name}</Text>
        <Text style={{fontSize:12,opacity:0.7}} >{actor.character}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  contanier: {
    marginRight: 10,
    display: 'flex',
    flexDirection: 'column',
    width: 100,
  },

  actorInfo: {
    marginLeft: 20,
    marginTop: 4,
  },
});
