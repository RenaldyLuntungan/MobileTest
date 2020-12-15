import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import ImageProfile from '../images/henry/Bitmap.png';
import ImageArsip1 from '../images/imageArsip1/Bitmap.png';
import imageArsip2 from '../images/imageArsip2/Bitmap.png';
import Bed from '../images/bed/bed.png';
import Bathtub from '../images/bathtub/bathtub.png';
import Land from '../images/land/land.png';
import Icon from 'react-native-vector-icons/Feather';
import IconEllipsis from 'react-native-vector-icons/Ionicons';

class ArsipComponents extends Component {
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
              <Image source={ImageProfile} style={{width: 40, height: 40}} />
            </View>
            <View style={{flexDirection: 'column', marginLeft: 10}}>
              <Text style={{fontWeight: 'bold'}}>Henry Scott</Text>
              <Text style={{fontSize: 10}}>Century 21 BSD City</Text>
            </View>
            <IconEllipsis
              name="ellipsis-vertical"
              size={25}
              style={{position: 'absolute', right: 5, top: 10}}
            />
          </View>
          <Image source={ImageArsip1} style={{width: '100%', height: 131}} />
          <View style={{marginLeft: 10, marginTop: 5}}>
            <Text>B Residence BSD Signature Lotus ...</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Rp 4.000.000 / Bulan
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: 'bold'}}>Apartmen</Text>
              <View
                style={{
                  marginLeft: 10,
                  width: 50,
                  height: 16,
                  borderRadius: 2,
                  backgroundColor: '#71C392',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{fontSize: 10, fontWeight: 'bold', color: 'white'}}>
                  Disewa
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
                  2
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
                  2
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
                  50<Text style={{fontSize: 10}}>M</Text>
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
              <Image source={ImageProfile} style={{width: 40, height: 40}} />
            </View>
            <View style={{flexDirection: 'column', marginLeft: 10}}>
              <Text style={{fontWeight: 'bold'}}>Henry Scott</Text>
              <Text style={{fontSize: 10}}>Century 21 BSD City</Text>
            </View>
            <IconEllipsis
              name="ellipsis-vertical"
              size={25}
              style={{position: 'absolute', right: 5, top: 10}}
            />
          </View>
          <Image source={imageArsip2} style={{width: '100%', height: 131}} />
          <View style={{marginLeft: 10, marginTop: 5}}>
            <Text>Foresta Ultimo BSD City</Text>
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
      </View>
    );
  }
}
export default ArsipComponents;
