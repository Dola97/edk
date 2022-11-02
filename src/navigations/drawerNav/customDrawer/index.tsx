import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { styles } from './style';
import { useFetch } from 'hooks';
import { ListItem } from '@rneui/base';
import { Add, Down } from 'constants/icons';
import { fonts, height, RHeight, RWidth } from 'theme';
import { RFValue } from 'react-native-responsive-fontsize';
import { apiRoutes, QUERYS } from 'constants/index';
import { useNavigation } from '@react-navigation/native';

export const DrawerContent = (props: any) => {
  const [isExpanded, setExpanded] = useState(true);
  const { navigate } = useNavigation();
  const { data: mycommunities }: any = useFetch(
    QUERYS.mycommunities,
    apiRoutes.mycommunities,
  );
  return (
    <View
      style={{
        flex: 1,
      }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={{}}>
            <ListItem.Accordion
              content={
                <>
                  <ListItem.Content>
                    <ListItem.Title
                      style={{
                        color: '#272727',
                        fontFamily: fonts.Semi,
                        fontSize: RFValue(14, height),
                      }}>
                      Your Communities
                    </ListItem.Title>
                  </ListItem.Content>
                </>
              }
              isExpanded={isExpanded}
              expandIcon={<Down fill="#000" />}
              icon={<Down fill="#000" />}
              onPress={() => {
                setExpanded(!isExpanded);
              }}>
              <ListItem
                style={{ marginBottom: 0 }}
                onPress={() => navigate('CreateCommunityStack')}>
                <Add fill="#000" />
                <ListItem.Content>
                  <ListItem.Title
                    style={{
                      color: '#272727',
                      fontFamily: fonts.Reg,
                      fontSize: RFValue(12, height),
                    }}>
                    Create your community
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
              {mycommunities?.map((l: any, i: any) => (
                <ListItem
                  key={`item_communty_moda${i}`}
                  onPress={() => console.log('d')}>
                  <Image
                    source={{ uri: 'https://picsum.photos/200/300' }}
                    style={{
                      width: RWidth(22),
                      height: RHeight(22),
                      borderRadius: 11,
                    }}
                  />
                  <ListItem.Content>
                    <ListItem.Title
                      style={{
                        color: '#272727',
                        fontFamily: fonts.Reg,
                        fontSize: RFValue(12, height),
                      }}>
                      {l.title}
                    </ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              ))}
            </ListItem.Accordion>
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};
