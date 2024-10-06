interface ScreenName {
  Home: string | any;
  HomeScreen:string|any;
  Splash: string | any;
  account: string | any;
  BottomTab: string | any;
  favorite:string|any;
  contactSync: string | any;
  chat:string| any;
  menu:string|any
}

const ScreenNames: ScreenName = {
  Home: 'Home',
  HomeScreen:'HomeScreen',
  Splash: 'Splash',
  account: 'Profile',
  BottomTab: 'BottomTab',
  favorite:'favorite',
  contactSync:'contactSync',
  chat:'chat',
  menu:'menu'
};

export {ScreenNames};
