import * as React from 'react';
import PropTypes from 'prop-types';
import { IMessage} from 'react-native-gifted-chat';
import {
  StyleSheet,
  Text,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  TextProps,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  text: {
    backgroundColor: 'transparent',
    color: '#000', // Default text color
    fontSize: 12,
    fontWeight: '600',
  },
});
export interface DayProps<TMessage extends IMessage = IMessage> {
    currentMessage?: TMessage
    nextMessage?: TMessage
    previousMessage?: TMessage
    containerStyle?: StyleProp<ViewStyle>
    wrapperStyle?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
    textProps?: TextProps
    dateFormat?: string
    inverted?: boolean
  }

export interface DayProps<TMessage> {
  currentMessage?: TMessage;
  nextMessage?: TMessage;
  previousMessage?: TMessage;
  containerStyle?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  textProps?: TextProps;
  dateFormat?: string;
  inverted?: boolean;
}

export function isSameDay(
  currentMessage:any,
  diffMessage: any,
) {
  if (!diffMessage || !diffMessage.createdAt) {
    return false;
  }
  
  const currentCreatedAt = new Date(currentMessage.createdAt);
  const diffCreatedAt = new Date(diffMessage.createdAt);
//   console.log(currentCreatedAt,'-----',diffCreatedAt,'======');
  if (isNaN(currentCreatedAt.getTime()) || isNaN(diffCreatedAt.getTime())) {
    return false;
  }

  return (
    currentCreatedAt.getFullYear() === diffCreatedAt.getFullYear() &&
    currentCreatedAt.getMonth() === diffCreatedAt.getMonth() &&
    currentCreatedAt.getDate() === diffCreatedAt.getDate()
  );
}

export function Day<TMessage extends IMessage>({
  dateFormat = "MMM DD, YYYY",
  currentMessage,
  previousMessage,
  containerStyle,
  wrapperStyle,
  textStyle,
}: DayProps<TMessage>) {

  if (!currentMessage || isSameDay(currentMessage, previousMessage)) {
    return null;
  }

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(new Date(currentMessage.createdAt));

//   console.log(currentMessage.createdAt,'+++++++++');
  
     const date = new Date(currentMessage.createdAt)
     const today = new Date();
    const isToday = date.getDate() === today.getDate() &&
                     date.getMonth() === today.getMonth() &&
                    date.getFullYear() === today.getFullYear();

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={wrapperStyle}>
        <Text style={[styles.text, textStyle]}>
         {isToday?'Today':formattedDate}
        </Text>
      </View>
    </View>
  );
}

Day.propTypes = {
  currentMessage: PropTypes.object,
  previousMessage: PropTypes.object,
  nextMessage: PropTypes.object,
  inverted: PropTypes.bool,
  containerStyle: PropTypes.object,
  wrapperStyle: PropTypes.object,
  textStyle: PropTypes.object,
  dateFormat: PropTypes.string,
};
