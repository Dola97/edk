import { useRoute } from '@react-navigation/native';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'api/api';
import { Input } from 'components';
import { apiRoutes, QUERYS } from 'constants/index';
import { usePrefetch } from 'hooks';
import React, { createRef, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Toast from 'react-native-toast-message';
import { styleAuth } from 'screens/auth-screens/reg-sc/styles';
import { height, width } from 'theme';

export const CommentInput = props => {
  return <></>;
};
