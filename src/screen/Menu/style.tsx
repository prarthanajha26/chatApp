import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/dimension';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    backgroundColor: '#2196F3',
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: vw(20),
  },
  innerContainer: {
    flexDirection: 'row',
    paddingBottom: vh(20),
    justifyContent: 'flex-start',
    gap: vw(15),
    width: '50%',
  },
  rightContainer: {
    paddingBottom: vh(20),
    justifyContent: 'flex-end',
  },
  iconStyle: {
    height: vh(15),
    width: vw(18),
  },
  backImg: {
    backgroundColor: '#3f88c2',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
  },
  addIcon: {
    fontSize: 35,
    color: 'white',
  },
  contactText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '400',
  },
  chatsText: {
    fontSize: 22,
    color: 'white',
    fontWeight: '700',
  },
  addContainer: {
    backgroundColor: '#3f88c2',
    paddingHorizontal: vw(10),
    //   justifyContent:'center',
    //   alignItems:'center',
    borderRadius: 8,
  },
  lowerContainer: {
    paddingHorizontal: vw(18),
    paddingTop: vh(15),
    flex: 1,
  },
  input: {
    paddingVertical: vh(15),
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: vw(35),
  },
  inputIcon: {
    position: 'absolute',
    height: vh(20),
    width: vw(20),
    top: vh(12),
    left: vw(10),
  },
  inputContainer: {
    position: 'relative',
    marginBottom: vh(20),
  },
  noChat: {
    aspectRatio: 1.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noChatYet: {
    fontSize: 16,
    fontWeight: '700',
  },
  middleChat: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  startChatButton: {
    backgroundColor: '#2a7bbb',
    paddingVertical: vh(15),
    paddingHorizontal: vw(25),
    borderRadius: 12,
    marginTop: vh(10),
  },
  startChat: {
    color: 'white',
    fontSize: 16,
  },

  initialsContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  initialsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
  userInfo: {
    justifyContent: 'space-around',
    alignContent: 'center',
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
  },
  userPhone: {
    fontSize: 14,
    color: '#777',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: vh(13),
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  outerContainer: {
    flexDirection: 'row',
  },
  listContainer: {
    borderRadius: 8,
    paddingHorizontal: vw(20),
    borderWidth: 2,
    borderColor: '#ffffff',
    backgroundColor: '#f8f9f9',
  },
  date: {textAlign: 'right'},
  lastmsg: {flexDirection: 'row'},
  announcementContainer: {
    alignItems: 'center',
    width: '30%',
    marginBottom: vh(20),
    borderRightWidth: 1,
    paddingRight: vw(10),
    borderRightColor: '#ccc',
    paddingVertical: vh(10),
  },
  announcementIconContainer: {
    backgroundColor: '#287bbb',
    height: vh(50),
    width: vw(50),
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: vh(10),
  },
  announcementIcon: {
    aspectRatio: 0.6,
  },
});

export default styles;
