import React, { useEffect } from 'react'
import { View, FlatList, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import { GameCard } from '../../components/game-card';
import { Game } from '../../models/games';
import { actionCreators } from '../../redux';
import styles from './style';

function GameListScreen() {
  const dispatch = useDispatch();
  const { getGames, resetGames } = bindActionCreators(actionCreators, dispatch)
  const games = useSelector((store) => store.games);

  useEffect(() => {
    getGames();
  }, []);

  const getImageURI = (steamUrl: string) => {
    if (steamUrl) {
      const appId = steamUrl.split("/").pop();
      if (appId) {
        return `https://steamcdn-a.akamaihd.net/steam/apps/${appId}/library_600x900_2x.jpg`
      }
    }
    return "https://steamcdn-a.akamaihd.net/steam/apps/661920/library_600x900_2x.jpg"
  }

  const renderGameCard = ({ item, index }: { item: Game, index:number }) => {
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