import { Divider } from '@rneui/base';
import { AText } from 'components';
import { Liked, ThreeDots } from 'constants/icons';
import { useApp } from 'hooks';
import React, { Fragment } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { RHeight, RWidth, width } from 'theme';

interface Props {
  comments: any[];
  timeAgo: any;
  pressReply: () => void;
}
export const Comments: React.FC<Props> = ({
  comments,
  timeAgo,
  pressReply,
}) => {
  const { setpost } = useApp();
  return (
    <>
      {comments?.map((obj, key) => {
        return (
          <Fragment key={`comment_detail_post${key}`}>
            <View
              style={{
                paddingTop: 14,
                paddingBottom: 14,
                backgroundColor: '#fff',
                paddingHorizontal: 16,
                width: width,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    source={{ uri: 'https://picsum.photos/200/300' }}
                    style={{
                      borderRadius: 31 / 2,
                      height: RHeight(31),
                      width: RWidth(31),
                      marginRight: 5,
                    }}
                  />
                  <View>
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <AText
                        style={{ color: '#272727' }}
                        children={`Posted by: ${'hell'} - `}
                        type={'reg'}
                        isTouchable={false}
                        fz={10}
                      />
                      <AText
                        style={{ color: '#9A9A9A' }}
                        children={'dd'}
                        type={'reg'}
                        isTouchable={false}
                        fz={10}
                      />
                    </View>
                    <AText
                      style={{ color: '#828282' }}
                      children={'work'}
                      type={'reg'}
                      isTouchable={false}
                      fz={10}
                    />
                  </View>
                </View>
                <TouchableOpacity onPress={() => console.log('d')}>
                  <ThreeDots fill="#000" />
                </TouchableOpacity>
              </View>
              <AText
                style={{ color: '#272727', paddingTop: 13, textAlign: 'left' }}
                children={obj.text}
                type={'semi'}
                isTouchable={false}
                fz={10}
              />

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  paddingTop: 8,
                }}>
                <>
                  <Liked />
                  <AText
                    style={{ color: '#272727', top: 2, paddingLeft: 4 }}
                    children={'Like'}
                    type={'semi'}
                    isTouchable={false}
                    fz={10}
                  />
                </>

                <AText
                  style={{ color: '#272727', top: 2, paddingLeft: 4 }}
                  children={'Reply'}
                  type={'semi'}
                  isTouchable={true}
                  pressText={() => {
                    pressReply();
                    setpost(obj);
                  }}
                  fz={10}
                />
              </View>
              <View
                style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Divider orientation="vertical" />
                <View style={{ paddingLeft: 14, marginTop: 8 }}>
                  {obj?.replies?.map((rep, k) => {
                    return (
                      <Fragment key={`replies_post_{k}${k}`}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            marginVertical: 10,
                          }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <Image
                              source={{
                                uri: 'https://picsum.photos/200/300',
                              }}
                              style={{
                                borderRadius: 31 / 2,
                                height: RHeight(31),
                                width: RWidth(31),
                                marginRight: 5,
                              }}
                            />
                            <View>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                }}>
                                <AText
                                  style={{ color: '#272727' }}
                                  children={`Posted by: ${'hell'} - `}
                                  type={'reg'}
                                  isTouchable={false}
                                  fz={10}
                                />
                                <AText
                                  style={{ color: '#9A9A9A' }}
                                  children={'dd'}
                                  type={'reg'}
                                  isTouchable={false}
                                  fz={10}
                                />
                              </View>
                              <AText
                                style={{ color: '#828282' }}
                                children={'work'}
                                type={'reg'}
                                isTouchable={false}
                                fz={10}
                              />
                            </View>
                          </View>
                          <TouchableOpacity onPress={() => console.log('d')}>
                            <ThreeDots fill="#000" />
                          </TouchableOpacity>
                        </View>
                        <AText
                          style={{
                            color: '#272727',
                            paddingTop: 13,
                            textAlign: 'left',
                          }}
                          children={rep.reply}
                          type={'semi'}
                          isTouchable={false}
                          fz={10}
                        />
                      </Fragment>
                    );
                  })}
                </View>
              </View>
            </View>

            <View
              style={{ height: 12, backgroundColor: '#EBF1F3', width: width }}
            />
          </Fragment>
        );
      })}
    </>
  );
};
