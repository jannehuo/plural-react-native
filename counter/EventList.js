import React, { Component } from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import EventCard from './EventCard';
import ActionButton from 'react-native-action-button';

const styles = StyleSheet.create({
    app: {
        paddingTop: 30,
        flex: 1,
        backgroundColor: "#f3f3f3"
    }
});

class EventList extends Component {
    state = {
        events:[] 
    }

    handleAddEvent = () => {
        this.props.navigation.navigate('form');
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                events: this.state.events.map(evt => ({
                    ...evt,
                    timer: Date.now()
                }))
            })
        }, 1000);

        const events = require('./db.json').events.map(e => ({
            ...e,
            date: new Date(e.date)
        }));
        this.setState({events});
    }

    render() {
        return [
            <FlatList
                key="flatlist" 
                data={this.state.events}
                renderItem={({item}) => <EventCard event={item} />}
                keyExtractor={item => item.id}
                style={styles.app}
            />,
            <ActionButton 
                key="fab"
                onPress={this.handleAddEvent}
                buttonColor="rgba(231,76,60,1)"
            />
        ];
    }
}

export default EventList;