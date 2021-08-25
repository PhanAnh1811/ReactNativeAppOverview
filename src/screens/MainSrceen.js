import React from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import SearchBar from '../components/SearchBar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import RenderItem from '../components/RenderItem';

// api trả về có field là price
//dùng hàm filter trên mảng dữ liệu api trả về dựa trên price

const apiKey = 'MMMQuWnLGwlTYdSMtKujs774rvSF8-g78jwHgo35nIoahZ1df13ph_HxFOTGIpGD-_CVpb--RMaPA2clqd8koS8x58EPk6H9fkhW791Uws_LRizh44UyVyGh4feNX3Yx';

export default function MainSrceen({ navigation }) {
    const [data, setData] = useState([]);
    const [term,setTerm] = useState('');
    useEffect(() => {
        getData()
    }, [])

    const getData = async (term) => {
        const data = await axios.get('https://api.yelp.com/v3/businesses/search', {
            params: {
                term: term,
                location: 'Texas'
            },
            headers: {
                Authorization: 'Bearer ' + apiKey
            }
        })
        setData(data.data.businesses)

    }

    const filterByPrice = (price) => {
        return data.filter(e => e.price === price);
    }

    return (
        <ScrollView style={{ flex: 1 }}>

            <SearchBar 
                term={term}
                onTermChange={(text) =>setTerm(text)}
                onTermSubmit={() => getData(term)}
            />
            <RenderItem navigation={navigation} DATA={filterByPrice('$')} title="Cost Effective" />
            <RenderItem navigation={navigation}  DATA={filterByPrice('$$')} title="Bit Pricer" />
            <RenderItem navigation={navigation}  DATA={filterByPrice('$$$')} title="Big Spender!" />
        </ScrollView>
    )
}

