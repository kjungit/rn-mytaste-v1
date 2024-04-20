import useAuth from '@/hooks/queries/useAuth';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const MapHomeScreen = () => {
  const {logoutMutation} = useAuth();
  return (
    <View>
      <Text>멥 스크린</Text>
      <Button title="로그아웃" onPress={() => logoutMutation.mutate(null)} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MapHomeScreen;
