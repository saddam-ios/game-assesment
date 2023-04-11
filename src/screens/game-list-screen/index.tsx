import React, { useEffect } from 'react'
import { View, FlatList, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import { GameCard } from '../../components/game-card';
import { Game } from '../../models/games';
import { actionCreators } from '../../redux';
import { getImageURI } from '../../Utils';
import styles from './style';

/**
 * GameListScreen will be responsible to get the games data 
 * & then will render the cards in a Flatlist
 */

function GameListScreen() {

  const dispatch = useDispatch();
  const { getGames } = bindActionCreators(actionCreators, dispatch)
  const games = useSelector((store) => store.games);


  useEffect(() => {
    getGames();
  }, []);

  
  const renderGameCard = ({ item }: { item: Game }) => {
    return <GameCard id = {item.id} title={item.title} imageUri={getImageURI(item.steamUrl)} publisher={item.publisher}></GameCard>
  }

  return (
    <View style={styles.containerStyle}>
      <FlatList
        data={games.games}
        style={styles.listStyle}
        keyExtractor={(item: Game) => `${item.id}${item.title}`}
        showsHorizontalScrollIndicator={false}
        renderItem={renderGameCard}
      />
    </View>
  );
}

export default GameListScreen;