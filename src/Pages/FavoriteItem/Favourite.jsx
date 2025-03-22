import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppStyles } from '../../Assets/Styles/common';
import Icon from 'react-native-vector-icons/FontAwesome';
import { toggleFavorite } from '../../store/Slices/listItemSlices';
import { scaleModerate, scaleVertical } from '../../Helpers/helper.scale';

const FavoriteScreen = () => {
    const dispatch = useDispatch()

    const favoriteEvent = useSelector((state) => state.apiData.favorites);
    const handleFavorite = (item) => {
        console.log('item', item)
        dispatch(toggleFavorite(item));
    };
    console.log('favoriteEvent', favoriteEvent)

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card}>
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
                    {item?.keywords?.map((tag, index) => (
                        <Text key={index} style={styles.tag}>
                            {tag}
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
                            name={"heart"}
                            size={30}
                            color={"blue"}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>Hello Renzo!</Text>
            <Text style={styles.subGreeting}>Are you ready to dance?</Text>

            {favoriteEvent.length > 0 ? (
                <FlatList
                    data={favoriteEvent.length > 0 && favoriteEvent}
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
        paddingHorizontal: scaleModerate(16),
        paddingTop: scaleModerate(16),
    },
    greeting: {
        fontSize: scaleModerate(24),
        fontWeight: 'bold',
        color: '#333',
    },
    subGreeting: {
        fontSize: scaleModerate(16),
        color: '#888',
        marginBottom: scaleModerate(16),
    },

    listContent: {
        paddingBottom: scaleModerate(16),
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: scaleModerate(12),
        marginBottom: scaleModerate(12),
        padding: scaleModerate(12),
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: scaleModerate(4),
        elevation: 3,
        alignItems: 'center',
    },
    image: {
        width: scaleModerate(60),
        height: scaleModerate(60),
        borderRadius: scaleModerate(8),
        resizeMode: 'cover',
        marginRight: scaleModerate(12),
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: scaleModerate(16),
        fontWeight: '600',
        color: '#333',
        marginBottom: scaleModerate(2),
    },
    date: {
        fontSize: scaleModerate(14),
        color: '#888',
        marginBottom: scaleModerate(2),
    },
    price: {
        fontSize: scaleModerate(14),
        color: '#444',
        fontWeight: '500',
        marginBottom: scaleModerate(2),
    },
    location: {
        fontSize: scaleModerate(14),
        color: '#666',
        marginBottom: scaleModerate(8),
    },
    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tag: {
        backgroundColor: '#f1f1f1',
        color: '#555',
        paddingVertical: scaleVertical(4),
        paddingHorizontal: scaleModerate(8),
        borderRadius: scaleModerate(12),
        marginRight: scaleModerate(4),
        fontSize: scaleModerate(12),
        marginBottom: scaleModerate(4),
    },
    noDataText: {
        fontSize: scaleModerate(16),
        color: '#999',
        textAlign: 'center',
        marginTop: scaleModerate(20),
    },
});

export default FavoriteScreen;
