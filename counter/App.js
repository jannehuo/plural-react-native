import React from 'react';
import EventList from './EventList';
import EventForm from './EventForm';
import {StackNavigator} from 'react-navigation';

export default StackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'Events'
    })
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: 'Add Event'
    })
  }
});