import { useNavigation } from '@react-navigation/native';
import { ListItem } from '@rneui/base';
import { Add, Down } from 'constants/icons';
import { apiRoutes, QUERYS } from 'constants/index';
import { useCommunities, useFetch, useModal } from 'hooks';
import React, { useState } from 'react';
import { Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { fonts, height, RHeight, RWidth } from 'theme';

export const DrawerBody = () => {
  const { setModal } = useModal();
  const { navigate } = useNavigation();

  const [isExpanded, setExpanded] = useState(true);
  const { data: mycommunities }: any = useFetch(
    QUERYS.mycommunities,
    apiRoutes.mycommunities,
  );

  const _handlePress = (route: any) => {
    setModal({ val: false, type: 'drawer' });
    navigate(route);
  };
  const { filterdData } = useCommunities(mycommunities);
  return (
    <>
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
        <ListItem style={{ marginBottom: 0 }} onPress={() => console.log('d')}>
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
        {filterdData?.map((l, i) => (
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
                {l.category.englishName}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </ListItem.Accordion>
    </>
  );
};
