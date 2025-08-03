import { Platform, StyleSheet } from 'react-native';
import { colors } from '../../configs/colors';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    // paddingHorizontal: 20,
    ...(Platform.OS === 'web' && {
      width: '100%',
    }),
  },
  //web
  navbar: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomColor: colors.gray,
    borderBottomWidth: 0.8,
    backgroundColor: colors.pink,
  },
  searchInput: {
    padding: 7,
    borderRadius: 5,
    borderWidth: 0.7,
    backgroundColor: colors.white,
  },
  navRef: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  navItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  navLink: {
    textDecorationLine: 'none',
    color: colors.black,
  },
  navText: {
    fontSize: 16,
    color: colors.black,
  },

  //mobile
  container: {
    // paddingVertical: 20
  },
  mobileNav: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.8,
  },
  rightSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    paddingHorizontal: 8,
    fontSize: 25,
  },
  menu: {
    backgroundColor: colors.white,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.gray,
    zIndex: 1,
    elevation: 1,
  },

  aeonTitle: {
    ...(Platform.OS === 'web'
      ? {
          color: colors.black,
        }
      : {
          color: colors.blue,
          fontWeight: 'bold',
        }),
  },
});
