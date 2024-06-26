import { View, ScrollView, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import React, { useState } from 'react';
import "react-native-gesture-handler";

import { styles } from "./AvatarCustomStyles";
import AutoAvatarIcon from "../../assets/icons/ic_autoAvatar_small_line.svg";
import UndoIcon from "../../assets/icons/ic_undo_small_line.svg";
import RedoIcon from "../../assets/icons/ic_redo_small_line.svg";
import RestartIcon from "../../assets/icons/ic_restart_small_line.svg";
import { accItems, faceItems, hairItems, objectItems, hairColors, bgColors } from "./avatarItems";
import SampleAvatarSvg from "../../assets/avatars/sample-avatar-1.svg";

const { width:SCREEN_WIDTH } = Dimensions.get('window');

export default function AvatarCustom({step: initalStep, onStepChange, avatar, setAvatar}) {
    const [avaIndex, setAvaIndex] = useState(1);

    const handleCategory = (id) => {
        setAvaIndex(id);
    }

    const handleHairColor = (id) => {
        setAvatar((prev => ({...prev, hairColor: id})));
    }

    const handleBgColor = (id) => {
        setAvatar((prev => ({...prev, bgColor: id})));
    }

    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <View style={styles.avatarDo}>
                    <TouchableOpacity>
                        <UndoIcon />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <RedoIcon />
                    </TouchableOpacity>
                </View>
                <View style={styles.avatarAuto}>
                    <TouchableOpacity style={styles.avatarAutoBtn}>
                        <AutoAvatarIcon style={styles.autoAvatarIcon} />
                        <Text style={styles.avatarAutoText}>자동생성</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.avatarRestart}>
                    <TouchableOpacity>
                        <RestartIcon />
                    </TouchableOpacity>
                </View>
                <View style={styles.avatarView}>
                    {/* <Image
                        source={require("../../assets/images/sample-avatar-1.png")} 
                        resizeMode="contain"
                        style={styles.avatarImg}
                    /> */}
                    <View style={styles.avatarSvg}>
                        <SampleAvatarSvg width="100%" height="100%" />
                    </View>
                    <View style={[styles.avatarBg, {backgroundColor: bgColors.find(color => color.id === avatar.bgColor).color}]}></View>
                </View>
                
            </View>
            <View style={styles.avatarItemContainer}>
                <View style={styles.avatarItemCategory}>
                    <TouchableOpacity
                        onPress={() => handleCategory(1)}
                    >
                        <Text style={avaIndex === 1 ? styles.avatarItemCategoryTextOn : styles.avatarItemCategoryTextOff}>이목구비</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleCategory(2)}
                    >
                        <Text style={avaIndex === 2 ? styles.avatarItemCategoryTextOn : styles.avatarItemCategoryTextOff}>헤어</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleCategory(3)}
                    >
                        <Text style={avaIndex === 3 ? styles.avatarItemCategoryTextOn : styles.avatarItemCategoryTextOff}>옷</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleCategory(4)}
                    >
                        <Text style={avaIndex === 4 ? styles.avatarItemCategoryTextOn : styles.avatarItemCategoryTextOff}>악세사리</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleCategory(5)}
                    >
                        <Text style={avaIndex === 5 ? styles.avatarItemCategoryTextOn : styles.avatarItemCategoryTextOff}>배경</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    {avaIndex === 1 && (
                        <ScrollView 
                            showsVerticalScrollIndicator={true}
                        >
                            <View style={styles.avatarItemList}>
                                {faceItems.map(item => (
                                    <TouchableOpacity
                                        key={item.id}
                                        onPress={(() => setAvatar((prev => ({...prev, face: item.id}))))}
                                        style={[
                                            styles.avatarItems, 
                                            avatar.face === item.id ? styles.itemSelectOn : styles.itemSelectOff,
                                        ]}
                                    >
                                        <View style={styles.avatarItem}>
                                            {item.svg({ width: '100%', height: '100%', borderRadius: 8 })}
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </ScrollView>
                    )}  
                    {avaIndex === 2 && (
                        <ScrollView
                            showsVerticalScrollIndicator={true}
                        >
                            <View style={styles.colorChipContainer}>
                                {hairColors.map(hc => (
                                    <TouchableOpacity 
                                        key={hc.id}
                                        onPress={(() => handleHairColor(hc.id))}
                                        style={[styles.colorChipOn, avatar.hairColor === hc.id ? styles.colorChipOn : styles.colorChipOff,]}
                                    ><View style={[styles.colorChip, {backgroundColor: hc.color}]}></View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                            <View style={styles.avatarItemList}>
                                {hairItems.map(item => (
                                    <TouchableOpacity
                                        key={item.id}
                                        onPress={(() => setAvatar((prev => ({...prev, hair: item.id}))))}
                                        style={[
                                            styles.avatarItems, 
                                            avatar.hair === item.id ? styles.itemSelectOn : styles.itemSelectOff,
                                        ]}
                                    >
                                        <View style={styles.avatarItem}>
                                            {item.svg({ width: '100%', height: '100%', borderRadius: 8 })}
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </ScrollView>
                    )}
                    {avaIndex === 3 && (
                        <Text>옷</Text>
                    )}
                    {avaIndex === 4 && (
                        <ScrollView
                            showsVerticalScrollIndicator={true}
                        >
                            <Text style={styles.avatarItemText}>귀걸이</Text>
                            <View style={styles.avatarItemList}>
                                {accItems.map(item => (
                                    <TouchableOpacity
                                        key={item.id}
                                        onPress={(() => setAvatar((prev => ({...prev, acc: item.id}))))}
                                        style={[
                                            styles.avatarItems, 
                                            avatar.acc === item.id ? styles.itemSelectOn : styles.itemSelectOff,
                                        ]}
                                    >
                                        <View style={styles.avatarItem}>
                                            {item.svg({ width: '100%', height: '100%', borderRadius: 8 })}
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </ScrollView>
                    )}
                    {avaIndex === 5 && (
                        <ScrollView
                            showsVerticalScrollIndicator={true}
                        >
                            <Text style={styles.avatarItemText}>배경색</Text>
                            <View style={styles.colorChipContainer}>
                                {bgColors.map(bc => (
                                    <TouchableOpacity 
                                        key={bc.id}
                                        onPress={(() => handleBgColor(bc.id))}
                                        style={[styles.colorChipOn, avatar.bgColor === bc.id ? styles.colorChipOn : styles.colorChipOff,]}
                                    ><View style={[styles.colorChip, {backgroundColor: bc.color}]}></View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                            <Text style={styles.avatarItemText}>오브젝트</Text>
                            <View style={styles.avatarItemList}>
                                {objectItems.map(item => (
                                    <TouchableOpacity
                                        key={item.id}
                                        onPress={(() => setAvatar((prev => ({...prev, bg: item.id}))))}
                                        style={[
                                            styles.avatarItems, 
                                            avatar.bg === item.id ? styles.itemSelectOn : styles.itemSelectOff,
                                        ]}
                                    >
                                        <View style={styles.avatarItem}>
                                            {item.svg({ width: '100%', height: '100%', borderRadius: 8 })}
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </ScrollView>
                    )}
                </View>
            </View>
        </View>
    );
}