import {React, useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useRecoilValue, useRecoilValueLoadable} from 'recoil';
import {widthPercentage, heightPercentage, fontPercentage} from '../Responsive';
import {monData, tueData, wedData, thuData, friData, splitMealData, getDayByMeal} from '../states';

export default function WeekCarousel(props) {
  const mealLoadable = useRecoilValueLoadable(getDayByMeal);
  const day = props.day;
  splitMealData();
  const mon = useRecoilValue(monData);
  const tue = useRecoilValue(tueData);
  const wed = useRecoilValue(wedData);
  const thu = useRecoilValue(thuData);
  const fri = useRecoilValue(friData);

  const [monIsPress, setIsMonpress] = useState(false);
  const [tueIsPress, setIsTuepress] = useState(false);
  const [wedIsPress, setIsWedpress] = useState(false);
  const [thuIsPress, setIsThupress] = useState(false);
  const [friIsPress, setIsFripress] = useState(false);

  useEffect(() => {
    switch (day) {
      case 1:
        setIsMonpress(true);
        monPress();
        break;
      case 2:
        setIsTuepress(true);
        tuePress();
        break;
      case 3:
        setIsWedpress(true);
        wedPress();
        break;
      case 4:
        setIsThupress(true);
        thuPress();
        break;
      case 5:
        setIsFripress(true);
        friPress();
        break;
      default:
        setIsFripress(true);
        friPress();
        break;
    }
  }, [mon]);

  let mon_date = mon.date.split('.')[1];
  let tue_date = tue.date.split('.')[1];
  let wed_date = wed.date.split('.')[1];
  let thu_date = thu.date.split('.')[1];
  let fri_date = fri.date.split('.')[1];

  const carouselStyle = StyleSheet.create({
    flex: 10,
    flexDirection: 'row',
    marginHorizontal: widthPercentage(50),
    marginTop: heightPercentage(20),
    justifyContent: 'space-between',
    alignItems: 'center',
  });

  const dayStyle = StyleSheet.create({
    fontSize: fontPercentage(16),
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#d9d9d9',
    textAlign: 'center',
    marginTop: heightPercentage(7),
  });

  const weekStyle = StyleSheet.create({
    marginVertical: heightPercentage(5),
    fontSize: fontPercentage(18),
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#7b7b7b',
    textAlign: 'center',
  });

  const touchStyle = StyleSheet.create({
    borderRadius: 20,
    paddingVertical: heightPercentage(5),
    backgroundColor: '#071648',
    justifyContent: 'center',
    alignItems: 'center',
  });

  const defaultTouchStyle = StyleSheet.create({
    borderRadius: 20,
    paddingVertical: heightPercentage(5),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  });

  const monPress = () => {
    props.setMealData(mon);
    setIsMonpress(true);
    setIsTuepress(false);
    setIsWedpress(false);
    setIsThupress(false);
    setIsFripress(false);
    console.log();
    console.log('monPress');
  };

  const tuePress = () => {
    props.setMealData(tue);
    setIsTuepress(true);
    setIsMonpress(false);
    setIsWedpress(false);
    setIsThupress(false);
    setIsFripress(false);
    console.log('tuePress');
  };

  const wedPress = () => {
    props.setMealData(wed);
    setIsWedpress(true);
    setIsMonpress(false);
    setIsTuepress(false);
    setIsThupress(false);
    setIsFripress(false);
    console.log('wedPress');
  };

  const thuPress = () => {
    props.setMealData(thu);
    setIsThupress(true);
    setIsMonpress(false);
    setIsTuepress(false);
    setIsWedpress(false);
    setIsFripress(false);
    console.log('thuPress');
  };

  const friPress = () => {
    props.setMealData(fri);
    setIsFripress(true);
    setIsMonpress(false);
    setIsTuepress(false);
    setIsWedpress(false);
    setIsThupress(false);
    console.log('friPress');
  };

  return (
    <View style={carouselStyle}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <TouchableOpacity
          style={monIsPress ? touchStyle : defaultTouchStyle}
          activeOpacity={0.5}
          onPress={monPress}
        >
          <Text style={dayStyle}>Mon</Text>
          <Text style={weekStyle}>{mon_date}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <TouchableOpacity
          style={tueIsPress ? touchStyle : defaultTouchStyle}
          activeOpacity={0.5}
          onPress={tuePress}
        >
          <Text style={dayStyle}>Tue</Text>
          <Text style={weekStyle}>{tue_date}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <TouchableOpacity
          style={wedIsPress ? touchStyle : defaultTouchStyle}
          activeOpacity={0.5}
          onPress={wedPress}
        >
          <Text style={dayStyle}>Wed</Text>
          <Text style={weekStyle}>{wed_date}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <TouchableOpacity
          style={thuIsPress ? touchStyle : defaultTouchStyle}
          activeOpacity={0.5}
          onPress={thuPress}
        >
          <Text style={dayStyle}>Thu</Text>
          <Text style={weekStyle}>{thu_date}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <TouchableOpacity
          style={friIsPress ? touchStyle : defaultTouchStyle}
          activeOpacity={0.5}
          onPress={friPress}
        >
          <Text style={dayStyle}>Fri</Text>
          <Text style={weekStyle}>{fri_date}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
