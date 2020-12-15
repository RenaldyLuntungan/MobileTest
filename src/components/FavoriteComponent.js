import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import ImageAndrea from '../images/andrea/59b6c4bfba785e36f932a317.png';
import ImageStewart from '../images/stewart/approachable-professional-headshots_1.png';
import ImageFavorite1 from '../images/imageFavorite1/Bitmap.png';
import ImageFavorite2 from '../images/imageFavorite2/Bitmap.png';
import Bed from '../images/bed/bed.png';
import Bathtub from '../images/bathtub/bathtub.png';
import Land from '../images/land/land.png';
import Icon from 'react-native-vector-icons/Feather';

class FavoriteComponents extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', backgroundColor: '#F9F9F9'}}>
        <View
          style={{
            width: '90%',
            height: 349,
            backgroundColor: 'white',
            borderRadius: 20,
            marginTop: 20,
          }}>
          <View style={{flexDirection: 'row', margin: 10}}>
            <View
              style={{
                width: 43,
                height: 43,
                borderWidth: 1,
                borderRadius: 40.5 / 2,
                borderColor: 'grey',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={ImageAndrea} style={{width: 40, height: 40}} />
            </View>
            <View style={{flexDirection: 'column', marginLeft: 10}}>
              <Text style={{fontWeight: 'bold'}}>Andrea Collins</Text>
              <Text style={{fontSize: 10}}>Century 21 BSD City</Text>
            </View>
          </View>
          <Image source={ImageFavorite1} style={{width: '100%', height: 131}} />
          <View style={{marginLeft: 10, marginTop: 5}}>
            <Text>B Residence BSD Siganture Lotus ...</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Rp 2.500.000.000
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: 'bold'}}>Rumah</Text>
              <View
                style={{
                  marginLeft: 10,
                  width: 50,
                  height: 16,
                  borderRadius: 2,
                  backgroundColor: '#5497F1',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{fontSize: 10, fontWeight: 'bold', color: 'white'}}>
                  Dijual
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon name="map-pin" size={12} color={'grey'} />
              <Text style={{marginLeft: 6, fontSize: 10, color: '#838383'}}>
                Jl. Edutown Kav III.1, BSD, Tangerang Selatan
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginHorizontal: 10,
              marginTop: 5,
              borderTopWidth: 1,
              borderTopColor: '#F2F2F2',
            }}>
            <View
              style={{
                width: '33%',
                height: 60,
                justifyContent: 'center',
                paddingLeft: 5,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image source={Bed} style={{width: 22, height: 19}} />
                <Text
                  style={{marginLeft: 15, fontSize: 16, fontWeight: 'bold'}}>
                  3+1
                </Text>
              </View>
              <Text style={{fontSize: 10, color: '#838383'}}>K. Tidur</Text>
            </View>
            <View
              style={{
                width: '33%',
                height: 60,
                justifyContent: 'center',
                paddingLeft: 5,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image source={Bathtub} style={{width: 22, height: 20}} />
                <Text
                  style={{marginLeft: 15, fontSize: 16, fontWeight: 'bold'}}>
                  2+1
                </Text>
              </View>
              <Text style={{fontSize: 10, color: '#838383'}}>K. Mandi</Text>
            </View>
            <View
              style={{
                width: '33%',
                height: 60,
                justifyContent: 'center',
                paddingLeft: 5,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image source={Land} style={{width: 21, height: 17}} />
                <Text
                  style={{marginLeft: 15, fontSize: 16, fontWeight: 'bold'}}>
                  118<Text style={{fontSize: 10}}>M</Text>
                </Text>
              </View>
              <Text style={{fontSize: 10, color: '#838383'}}>L. Tanah</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            width: '90%',
            height: 349,
            backgroundColor: 'white',
            borderRadius: 20,
            marginTop: 20,
            marginBottom: 40,
          }}>
          <View style={{flexDirection: 'row', margin: 10}}>
            <View
              style={{
                width: 43,
                height: 43,
                borderWidth: 1,
                borderRadius: 40.5 / 2,
                borderColor: 'grey',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={ImageStewart} style={{width: 40, height: 40}} />
            </View>
            <View style={{flexDirection: 'column', marginLeft: 10}}>
              <Text style={{fontWeight: 'bold'}}>Stewart Vale</Text>
              <Text style={{fontSize: 10}}>Century 21 Breeze</Text>
            </View>
          </View>
          <Image source={ImageFavorite2} style={{width: '100%', height: 131}} />
          <View style={{marginLeft: 10, marginTop: 5}}>
            <Text>The Branz Apartment BSD City</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Rp 2.250.000.000
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: 'bold'}}>Rumah</Text>
              <View
                style={{
                  marginLeft: 10,
                  width: 50,
                  height: 16,
                  borderRadius: 2,
                  backgroundColor: '#5497F1',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{fontSize: 10, fontWeight: 'bold', color: 'white'}}>
                  Dijual
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon name="map-pin" size={12} color={'grey'} />
              <Text style={{marginLeft: 6, fontSize: 10, color: '#838383'}}>
                Jl. Edutown Kav III.1, BSD, Tangerang Selatan
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginHorizontal: 10,
              marginTop: 5,
              borderTopWidth: 1,
              borderTopColor: '#F2F2F2',
            }}>
            <View
              style={{
                width: '33%',
                height: 60,
                justifyContent: 'center',
                paddingLeft: 5,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image source={Bed} style={{width: 22, height: 19}} />
                <Text
                  style={{marginLeft: 15, fontSize: 16, fontWeight: 'bold'}}>
                  3+1
                </Text>
              </View>
              <Text style={{fontSize: 10, color: '#838383'}}>K. Tidur</Text>
            </View>
            <View
              style={{
                width: '33%',
                height: 60,
                justifyContent: 'center',
                paddingLeft: 5,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image source={Bathtub} style={{width: 22, height: 20}} />
                <Text
                  style={{marginLeft: 15, fontSize: 16, fontWeight: 'bold'}}>
                  2+1
                </Text>
              </View>
              <Text style={{fontSize: 10, color: '#838383'}}>K. Mandi</Text>
            </View>
            <View
              style={{
                width: '33%',
                height: 60,
                justifyContent: 'center',
                paddingLeft: 5,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image source={Land} style={{width: 21, height: 17}} />
                <Text
                  style={{marginLeft: 15, fontSize: 16, fontWeight: 'bold'}}>
                  85<Text style={{fontSize: 10}}>M</Text>
                </Text>
              </View>
              <Text style={{fontSize: 10, color: '#838383'}}>L. Tanah</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default FavoriteComponents;
