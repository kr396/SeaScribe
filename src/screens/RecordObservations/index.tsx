import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  PanResponder,
  Animated,
} from 'react-native';
import {ActionContainer, ObservationForm} from './components';
import {colors} from '../../constants';

const RecordObservations = () => {
  const [offset, setOffset] = useState(0);
  const [topLeftHeight, setTopLeftHeight] = useState(40);
  const [bottmLeftHeight, setBottomLeftHeight] = useState(40);
  const [topRightHeight, setTopRightHeight] = useState(40); // min height for top pane header
  const [bottomRightHeight, setBottomRightHeight] = useState(40); // min height for bottom pane header,
  const [leftViewWidth, setLeftViewWidth] = useState(40);
  const [rightViewWidth, setRightViewWidth] = useState(40);
  const [isHorizontalLeftDividerClicked, setIsHorizontalLeftDividerClicked] =
    useState(false);
  const [isHorizontalRightDividerClicked, setIsHorizontalRightDividerClicked] =
    useState(false);
  const [isVerticalDividerClicked, setIsVerticalDividerClicked] =
    useState(false);
  const deviceHeight = Dimensions.get('window').height;
  const deviceWidth = Dimensions.get('window').width;
  const pan = useRef(new Animated.ValueXY());

  const leftHorizontalPanResponder = PanResponder.create({
    // onMoveShouldSetResponderCapture: () => true,
    onMoveShouldSetPanResponderCapture: () => true,

    // Initially, set the Y position offset when touch start
    onPanResponderGrant: (e, gestureState) => {
      setOffset(e.nativeEvent.pageY);
      setIsHorizontalLeftDividerClicked(true);
    },

    // When we drag the divider, set the bottomHeight (component state) again.
    onPanResponderMove: (e, gestureState) => {
      setOffset(e.nativeEvent.pageY);
      setBottomLeftHeight(
        gestureState.moveY > deviceHeight - 40
          ? 40
          : deviceHeight - gestureState.moveY,
      );
    },

    onPanResponderRelease: (e, gestureState) => {
      // Do something here for the touch end event
      setOffset(e.nativeEvent.pageY);
      setIsHorizontalLeftDividerClicked(false);
    },
  });

  const rightHorizontalPanResponder = PanResponder.create({
    // onMoveShouldSetResponderCapture: () => true,
    onMoveShouldSetPanResponderCapture: () => true,

    // Initially, set the Y position offset when touch start
    onPanResponderGrant: (e, gestureState) => {
      setOffset(e.nativeEvent.pageY);
      setIsHorizontalRightDividerClicked(true);
    },

    // When we drag the divider, set the bottomHeight (component state) again.
    onPanResponderMove: (e, gestureState) => {
      setOffset(e.nativeEvent.pageY);
      setBottomRightHeight(
        gestureState.moveY > deviceHeight - 40
          ? 40
          : deviceHeight - gestureState.moveY,
      );
    },

    onPanResponderRelease: (e, gestureState) => {
      // Do something here for the touch end event
      setOffset(e.nativeEvent.pageY);
      setIsHorizontalRightDividerClicked(false);
    },
  });

  const verticalPanResponded = PanResponder.create({
    // onMoveShouldSetResponderCapture: () => true,
    onMoveShouldSetPanResponderCapture: () => true,

    // Initially, set the Y position offset when touch start
    onPanResponderGrant: (e, gestureState) => {
      setIsVerticalDividerClicked(true);
    },

    // When we drag the divider, set the bottomHeight (component state) again.
    onPanResponderMove: (e, gestureState) => {
      setRightViewWidth(
        gestureState.moveX > deviceWidth - 40
          ? 40
          : deviceWidth - gestureState.moveX,
      );
    },

    onPanResponderRelease: (e, gestureState) => {
      // Do something here for the touch end event
      // setOffset(e.nativeEvent.pageY);
      setIsVerticalDividerClicked(false);
    },
  });

  return (
    <View style={styles.content}>
      {/* Left view */}
      <Animated.View style={[{flex: 1, minWidth: 40}, {width: leftViewWidth}]}>
        {/* Top Left View */}
        <Animated.View
          style={[
            {backgroundColor: 'pink', minHeight: 40, flex: 1},
            {height: topLeftHeight},
          ]}>
          <ObservationForm />
        </Animated.View>

        {/* Left Horizontal Divider */}
        <View
          style={[
            {height: 10},
            isHorizontalLeftDividerClicked
              ? {backgroundColor: '#666'}
              : {backgroundColor: '#e2e2e2'},
          ]}
          {...leftHorizontalPanResponder.panHandlers}></View>

        {/* Bottom Left View */}
        <Animated.View
          style={[
            {backgroundColor: colors.white, padding: 10, minHeight: 40},
            {height: bottmLeftHeight},
          ]}>
          <ActionContainer />
        </Animated.View>
      </Animated.View>
      <View
        style={[
          {width: 10},
          isVerticalDividerClicked
            ? {backgroundColor: '#666'}
            : {backgroundColor: '#e2e2e2'},
        ]}
        {...verticalPanResponded.panHandlers}></View>

      <Animated.View style={[{minWidth: 40}, {width: rightViewWidth}]}>
        <Animated.View
          style={[
            {backgroundColor: 'red', minHeight: 40, flex: 1},
            {height: topRightHeight},
          ]}></Animated.View>

        {/* Divider */}
        <View
          style={[
            {height: 10},
            isHorizontalRightDividerClicked
              ? {backgroundColor: '#666'}
              : {backgroundColor: '#e2e2e2'},
          ]}
          {...rightHorizontalPanResponder.panHandlers}></View>

        {/* Bottom Right View */}
        <Animated.View
          style={[
            {backgroundColor: 'blue', minHeight: 40},
            {height: bottomRightHeight},
          ]}></Animated.View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default RecordObservations;
