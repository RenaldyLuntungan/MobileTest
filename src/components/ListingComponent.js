import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Modal from 'react-native-modal';
import ImageProfile from '../images/henry/Bitmap.png';
import ImageListing1 from '../images/imageListing1/Bitmap.png';
import ImageListing2 from '../images/imageListing2/Bitmap.png';
import Bed from '../images/bed/bed.png';
import Bathtub from '../images/bathtub/bathtub.png';
import Land from '../images/land/land.png';
import Icon from 'react-native-vector-icons/Feather';
import IconEllipsis from 'react-native-vector-icons/Ionicons';
import IconPen from 'react-native-vector-icons/SimpleLineIcons';

class ListingComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {isModalVisible: false};
  }
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  DetailpageForm = () => {
    this.props.navigation.navigate('DetailPage');
  };

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
            <TouchableOpacity
              style={{position: 'absolute', right: 5, top: 10}}
              onPress={this.toggleModal}>
              <IconEllipsis name="ellipsis-vertical" size={25} />
            </TouchableOpacity>
          </View>
          <Image source={ImageListing1} style={{width: '100%', height: 131}} />
          <View style={{marginLeft: 10, marginTop: 5}}>
            <Text>Nava Park BSD City</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Rp 6.500.000.000
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
                  3+1
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
                  300<Text style={{fontSize: 10}}>M</Text>
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
          <Image source={ImageListing2} style={{width: '100%', height: 131}} />
          <View style={{marginLeft: 10, marginTop: 5}}>
            <Text>Woody Residence Foresta</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Rp 10.000.000 / Bulan
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: 'bold'}}>Apartemen</Text>
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
                  4
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
                  4
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
                  275<Text style={{fontSize: 10}}>M</Text>
                </Text>
              </View>
              <Text style={{fontSize: 10, color: '#838383'}}>L. Tanah</Text>
            </View>
          </View>
        </View>
        <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={() => this.setState({isModalVisible: false})}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0,
          }}>
          <View style={{flex: 1, justifyContent: 'flex-end', width: '100%'}}>
            <View
              style={{
                height: 272,
                backgroundColor: 'white',
                paddingTop: 20,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
              }}>
              <View
                style={{
                  marginHorizontal: 30,
                  marginTop: 40,
                }}>
                <View
                  style={{
                    height: 45,
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                  }}>
                  <IconPen name="pencil" size={20} />
                  <Text style={{marginLeft: 30, fontWeight: 'bold'}}>Ubah</Text>
                </View>
                <View
                  style={{
                    marginTop: 20,
                    height: 45,
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                  }}>
                  <Icon name="trash-2" size={20} />
                  <Text style={{marginLeft: 30, fontWeight: 'bold'}}>
                    Hapus
                  </Text>
                </View>
                <View style={{marginTop: 20, height: 45, flexDirection: 'row'}}>
                  <IconPen name="tag" size={20} />
                  <Text style={{marginLeft: 30, fontWeight: 'bold'}}>
                    Tandai Terjual
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
export default ListingComponents;
