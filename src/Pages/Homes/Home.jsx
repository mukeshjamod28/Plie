import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { getEventList } from '../../API/APIManager';
import { useDispatch, useSelector } from 'react-redux';
import { AppStyles } from '../../Assets/Styles/common';
import { handleError } from '../../Helpers/helpers.extension';
import { toggleFavorite } from '../../store/Slices/listItemSlices';

import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const HomeScreen = () => {
    const dispatch = useDispatch()

    const currentUser = useSelector((state) => state.apiData.CurrentUser);
    const favorites = useSelector((state) => state.apiData.favorites);

    const [isLoading, setIsLoading] = useState(false);
    const [eventData, setEventData] = useState([]);

    const handleFavorite = (item) => {
        dispatch(toggleFavorite(item))
    }

    const renderItem = ({ item }) => {
        const isFavorite = favorites.some(event => event?.event_date_id === item?.event_date_id);
        return (
            <TouchableOpacity style={styles.card} key={item?.event_date_id}>
                {/* Left side - Image */}
                <Image
                    source={{ uri: item?.event_profile_img || 'https://via.placeholder.com/200' }}
                    style={styles.image}
                />
                {/* Right side - Content */}
                <View style={styles.content}>
                    <Text style={styles.title} numberOfLines={1}>
                        {item?.event_name}
                    </Text>
                    <Text style={styles.date}>
                        {item?.readable_from_date} - {item?.readable_to_date}
                    </Text>
                    <Text style={styles.price}>
                        {item?.event_price_from} - {item?.event_price_to}
                    </Text>

                    {/* Tags */}
                    <View style={styles.tags}>
                        {item?.danceStyles?.map((tag, index) => (
                            <Text key={index} style={styles.tag}>
                                {tag?.ds_name}
                            </Text>
                        ))}
                    </View>
                </View>

                {/* Action Buttons */}
                <View style={[AppStyles?.flexCol, AppStyles?.alignItemsCenter, { gap: 12 }]}>
                    <TouchableOpacity>
                        <Feather name="arrow-right" size={30} />
                    </TouchableOpacity>
                    <Text style={styles.location}>
                        {item?.city},{item?.country}
                    </Text>
                    <View style={[AppStyles?.dFlex, AppStyles?.flexRow]}>
                        <TouchableOpacity>
                            <Feather name="upload" size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleFavorite(item)}>
                            <Icon
                                name={isFavorite ? "heart" : "heart-o"}
                                size={30}
                                color={isFavorite ? "blue" : "black"}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        )
    };

    useEffect(() => {
        setIsLoading(true);
        getEventList(currentUser?.token)
            .then((response) => {
                if (response?.success) {
                    setEventData(response?.data?.events ?? []);
                } else {
                    setEventData([]);
                    handleError("GetCurrentUser Error:", response);
                }
            })
            .catch((error) => {
                setEventData([]);
                handleError("GetCurrentUser Error:", error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [currentUser]);
    
    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>Hello Renzo!</Text>
            <Text style={styles.subGreeting}>Are you ready to dance?</Text>
            {isLoading ? (
                <ActivityIndicator style={styles.loading} color="red" size="large" />
            ) : eventData.length > 0 ? (
                <FlatList
                    data={eventData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.event_id.toString()}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContent}
                />
            ) : (
                <Text style={styles.noDataText}>No events available</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    subGreeting: {
        fontSize: 16,
        color: '#888',
        marginBottom: 16,
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listContent: {
        paddingBottom: 16,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
        resizeMode: 'cover',
        marginRight: 12,
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    date: {
        fontSize: 14,
        color: '#888',
        marginBottom: 2,
    },
    price: {
        fontSize: 14,
        color: '#444',
        fontWeight: '600',
        marginBottom: 2,
    },
    location: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tag: {
        backgroundColor: '#f1f1f1',
        color: '#555',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 12,
        marginRight: 4,
        fontSize: 12,
        marginBottom: 4,
    },
    actions: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
    },
    noDataText: {
        fontSize: 16,
        color: '#999',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default HomeScreen;
