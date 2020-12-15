import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import ImageListing1 from '../images/imageListing1/Bitmap.png';
import ImageGmap from '../images/gmap/Gmap.png';
import Favorit from '../components/FavoriteComponent';
import Icon from 'react-native-vector-icons/Feather';

class DetailPage extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <Image source={ImageListing1} style={{width: '100%'}} />
        </View>
        <View
          style={{
            width: '100%',
            height: 140,
            backgroundColor: 'white',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            padding: 20,
          }}>
          <Text style={{fontSize: 16}}>Nava Park BSD City</Text>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>
            Rp.6.500.000.000
          </Text>
          <View
            style={{
              borderTopWidth: 0.5,
              marginVertical: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: 10,
            }}>
            <View style={{flexDirection: 'column'}}>
              <Text>Rumah untuk Dijual</Text>
              <View style={{flexDirection: 'row'}}>
                <Icon name="map-pin" size={12} color={'grey'} />
                <Text style={{fontSize: 10, color: '#838383', paddingLeft: 5}}>
                  Jl. Edutown Kav III.1, BSD, Tangerang Selatan
                </Text>
              </View>
            </View>
            <Image source={ImageGmap} />
          </View>
        </View>
        <View
          style={{
            height: 37,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <View
            style={{
              borderColor: '#BEAF87',
              borderBottomWidth: 1,
              height: 37,
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Text style={{fontWeight: 'bold', color: '#BEAF87'}}>
                Listing Info
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 37,
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Text style={{fontWeight: 'bold', color: 'black'}}>
                Deskripsi
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{height: 600, width: '100%', backgroundColor: 'white'}}></View>
      </ScrollView>
    );
  }
}
export default DetailPage;
