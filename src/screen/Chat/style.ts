import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/dimension';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6ecf4',
  },
  backContainer: {
    backgroundColor: 'white',
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  backIcon: {
    height: vh(20),
    width: vw(20),
  },
  initialsWrapper: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  initialsContainer: {
    width: vw(35),
    height: vh(35),
    borderRadius: 25,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  initialsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
  statusIndicator: {
    height: vh(15),
    width: vw(15),
    borderRadius: 100,
    backgroundColor: 'green',
    position: 'absolute',
    top: vh(23),
    left: vw(27),
    borderWidth: 3,
    borderColor: 'white',
  },
  chatTopBar: {
    flexDirection: 'row',
    paddingTop: vh(60),
    paddingHorizontal: vw(20),
    backgroundColor: '#f8f9f9',
    justifyContent: 'space-between',
    paddingBottom: vh(20),
    borderRadius: 20,
  },
  nameContainer: {
    width: '60%',
    justifyContent: 'center',
    paddingLeft: vw(10),
  },
  threeDot: {
    width: '10%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    overflow: 'hidden',
    maxHeight: 20,
  },
  clocked: {
    fontSize: 12,
    fontWeight: '400',
    color: '#9E9E9E',
  },
  timeText: {
    fontSize: 10,
    color: '#888',
    marginHorizontal: vw(8),
    marginBottom: vh(5),
  },
  bubbleContainer: {
    marginTop: vh(10),
  },
  bubble: {
    position: 'relative',
    padding: 10,
    borderRadius: 10,
    margin: 0,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: vw(20),
    paddingVertical: vh(10),
    paddingBottom: vh(30),
    backgroundColor: '#f8f9f9',
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 4,
    paddingHorizontal: vw(10),
    marginRight: vw(10),
    paddingVertical: vh(10),
    marginLeft: vw(10),
  },
  sendButton: {
    backgroundColor: '#007bff',
    borderRadius: 100,
    paddingVertical: vh(10),
    paddingHorizontal: vw(10),
  },
  sendButtonImage: {
    height: vh(20),
    width: vw(20),
  },
  addView: {
    borderWidth: 1,
    borderRadius: 100,
    height: vh(20),
    width: vw(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontSize: 15,
  },
  selectedEmoji: {
    fontSize: vw(15),
  },
  emojiContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: vh(20),
    left: vw(-20),
    height: vh(30),
    width: vw(30),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
