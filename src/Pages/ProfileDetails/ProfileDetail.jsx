import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { changeCurrentUserValue } from '../../store/Slices/listItemSlices';
import LoginScreen from '../Auth/Login';

//dummy data for demo profile page
const userData = {
    profileImage: 'https://via.placeholder.com/150',
    name: 'Renzo Rivera',
    username: '@renzorivera',
    location: 'Berlin, Germany',
    stats: {
        events: 24,
        followers: 200,
        following: 180,
    },
    events: [
        {
            id: '1',
            title: 'ADICTO: Berlin Festival',
            date: '24.02.2022 - 26.02.2022',
            price: '€30 - €100',
            location: 'Berlin, Germany',
            image: 'https://via.placeholder.com/150',
            tags: ['Workshop', 'Bachata'],
        },
        {
            id: '2',
            title: 'Berlin Sensual Nights',
            date: '29.02.2022 | 21:00 - 04:00',
            price: '€10 - €100',
            location: 'Berlin, Germany',
            image: 'https://via.placeholder.com/150',
            tags: ['Party', 'Bachata', 'Salsa', 'Kiz'],
        },
    ],
};

const ProfileScreen = () => {
    const navigation = useNavigation()

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card}>
            {/* Left Side - Event Image */}
            <Image source={{ uri: item.image }} style={styles.eventImage} />

            {/* Right Side - Event Details */}
            <View style={styles.eventContent}>
                <Text style={styles.eventTitle} numberOfLines={1}>
                    {item.title}
                </Text>
                <Text style={styles.eventDate}>
                    {item.date}
                </Text>
                <Text style={styles.eventPrice}>
                    {item.price}
                </Text>
                <Text style={styles.eventLocation}>
                    {item.location}
                </Text>

                {/* Tags */}
                <View style={styles.eventTags}>
                    {item.tags.map((tag, index) => (
                        <Text key={index} style={styles.eventTag}>
                            {tag}
                        </Text>
                    ))}
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* Profile Section */}
            <View style={styles.profileContainer}>
                <Image source={{ uri: userData.profileImage }} style={styles.profileImage} />
                <View style={styles.userInfo}>
                    <Text style={styles.name}>{userData.name}</Text>
                    <Text style={styles.username}>{userData.username}</Text>
                    <Text style={styles.location}>{userData.location}</Text>
                </View>

                {/* Edit Button */}
                <TouchableOpacity style={styles.editButton} onPress={() => {
                    // navigation.navigate("")
                    // changeCurrentUserValue({}),
                        <LoginScreen />
                }}>
                    <Text style={styles.editButtonText}>Logout</Text>
                </TouchableOpacity>
            </View>

            {/* Stats */}
            <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                    <Text style={styles.statValue}>{userData.stats.events}</Text>
                    <Text style={styles.statLabel}>Events</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.statValue}>{userData.stats.followers}</Text>
                    <Text style={styles.statLabel}>Followers</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.statValue}>{userData.stats.following}</Text>
                    <Text style={styles.statLabel}>Following</Text>
                </View>
            </View>

            {/* Event List */}
            <FlatList
                data={userData.events}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.eventList}
                showsVerticalScrollIndicator={false}
            />
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
    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 12,
    },
    userInfo: {
        alignItems: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    username: {
        fontSize: 14,
        color: '#888',
    },
    location: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    editButton: {
        marginTop: 10,
        backgroundColor: '#eee',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    editButtonText: {
        color: '#444',
        fontSize: 14,
        fontWeight: '500',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    statItem: {
        alignItems: 'center',
    },
    statValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    statLabel: {
        fontSize: 14,
        color: '#888',
    },
    eventList: {
        paddingBottom: 16,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
        alignItems: 'center',
    },
    eventImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
        resizeMode: 'cover',
        marginRight: 12,
    },
    eventContent: {
        flex: 1,
    },
    eventTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 2,
    },
    eventDate: {
        fontSize: 14,
        color: '#888',
        marginBottom: 2,
    },
    eventPrice: {
        fontSize: 14,
        color: '#444',
        fontWeight: '500',
        marginBottom: 2,
    },
    eventLocation: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    eventTags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    eventTag: {
        backgroundColor: '#f1f1f1',
        color: '#555',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 12,
        marginRight: 4,
        fontSize: 12,
        marginBottom: 4,
    },
});

export default ProfileScreen;
