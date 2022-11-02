import { Image } from '@rneui/base';
import { AText } from 'components/Text/Text';
import { Comments, Liked, Share, ThreeDots, UnLiked } from 'constants/icons';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { RHeight, RWidth, width } from 'theme';
import { CardProps } from './types';
const PLACEHOLDER = 'https://via.placeholder.com/468x60?text=Edaktic';
export const Card: React.FC<CardProps> = ({
  bg = '#fff',
  imgUser = PLACEHOLDER,
  pressMenu,
  isLiked,
  pressShare,
  isPersonal,
  likes,
  Join,
  postImg,
  comments,
  title,
  desc,
  writeReply,
  time,
  by,
  isRecomended,
  pressCard,
  detaild,
  isComment = false,
  work,
  PressLike,
  isLoading = false,
}) => {
  return (
    <View
      style={{
        paddingTop: 19,
        paddingBottom: 10,
        backgroundColor: bg,
        paddingHorizontal: 16,
        width: width,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={{ uri: imgUser }}
            containerStyle={{
              borderRadius: 31 / 2,
              height: RHeight(31),
              width: RWidth(31),
              marginRight: 5,
            }}
          />
          {!isPersonal ? (
            <View>
              <AText
                style={{ color: '#272727' }}
                children={title}
                type={'semi'}
                isTouchable={false}
                fz={12}
              />
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AText
                  style={{ color: '#272727' }}
                  children={`Posted by: ${by} - `}
                  type={'reg'}
                  isTouchable={false}
                  fz={10}
                />
                <AText
                  style={{ color: '#9A9A9A' }}
                  children={`${time}`}
                  type={'reg'}
                  isTouchable={false}
                  fz={10}
                />
              </View>
            </View>
          ) : (
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AText
                  style={{
                    color: '#272727',

                    textAlign: 'center',
                  }}
                  children={`${by} -`}
                  type={'reg'}
                  isTouchable={false}
                  fz={10}
                />
                <AText
                  style={{ color: '#9A9A9A' }}
                  children={`${time}`}
                  type={'reg'}
                  isTouchable={false}
                  fz={10}
                />
              </View>
              <AText
                style={{ color: '#828282' }}
                children={work}
                type={'reg'}
                isTouchable={false}
                fz={10}
              />
            </View>
          )}
        </View>
        {isRecomended ? (
          <TouchableOpacity
            onPress={Join}
            style={{
              width: RWidth(61),
              paddingVertical: 5,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#0074E2',
              borderRadius: 11,
            }}>
            <AText
              style={{ color: '#FFF' }}
              children="Join"
              type={'semi'}
              isTouchable={false}
              fz={10}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity disabled={isLoading} onPress={pressMenu}>
            <ThreeDots width={RWidth(20)} height={RHeight(20)} fill="#000" />
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity
        onPress={pressCard}
        disabled={detaild ? true : isLoading ? true : false}>
        <AText
          style={{ color: '#272727', paddingTop: 13, textAlign: 'left' }}
          children={desc}
          type={'semi'}
          isTouchable={false}
          fz={10}
        />
        {postImg && (
          <Image
            source={{ uri: postImg }}
            containerStyle={{
              width: RWidth(343),
              marginTop: 10,
              height: RHeight(209),
              alignSelf: 'center',
            }}
          />
        )}
      </TouchableOpacity>
      {isComment ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingTop: 8,
          }}>
          <TouchableOpacity disabled={isLoading} onPress={PressLike}>
            {isLiked == true ? <Liked /> : <UnLiked />}
          </TouchableOpacity>
          <AText
            style={{ color: '#272727', top: 2, paddingLeft: 4 }}
            children={isLiked === true ? 'unLike' : 'Like'}
            type={'semi'}
            isTouchable={false}
            fz={10}
          />
          <AText
            style={{ color: '#272727', top: 2, paddingLeft: 4 }}
            children={'Reply'}
            type={'semi'}
            isTouchable={true}
            pressText={writeReply}
            fz={10}
          />
        </View>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 8,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity disabled={isLoading} onPress={PressLike}>
              {isLiked == true ? <Liked /> : <UnLiked />}
            </TouchableOpacity>
            <AText
              style={{ color: '#272727', top: 2, paddingLeft: 4 }}
              children={likes}
              type={'semi'}
              isTouchable={false}
              fz={12}
            />
            <Comments style={{ top: 2, marginLeft: 18 }} />
            <AText
              style={{ color: '#272727', top: 1, paddingLeft: 4 }}
              children={comments}
              type={'semi'}
              isTouchable={false}
              fz={12}
            />
          </View>
          <TouchableOpacity
            onPress={pressShare}
            disabled={isLoading}
            style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Share />
            <AText
              style={{ color: '#272727', top: 1, paddingLeft: 6 }}
              children="Share"
              type={'semi'}
              isTouchable={false}
              fz={12}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
