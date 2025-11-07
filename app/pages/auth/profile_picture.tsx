import { appStyles } from "@/styles/auth.style";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import SkipButtonWrapper from "./generic/skip_button_wrapper";
import { ColorValue } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from "react";
import awsHelper from "@/app/helpers/aws.helper";

export default function ProfilePicture() {
  interface Iimage {
    url: string ;
    isNew: boolean;
  }
  const router = useRouter();
  const [image, setImage] = useState<Iimage | null>(null);

  const nextPage = async (image_url: string) : Promise<void> => {
    awsHelper.uploadFile(image_url)
    router.push("/pages/auth/phone");
  }
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const image_url = result.assets[0].uri!
      setImage({
        url: image_url,
        isNew: true
    })
    }
  };

  const buttonColors: readonly [ColorValue, ColorValue] = image?.isNew ? ["#E2428F", "#BE66EB"] : ["#4C4C4C", "#4C4C4C"]

  return (
    <SkipButtonWrapper>
      <View style={[appStyles.container, appStyles.phonePage]}>
        <View>
          <View style={appStyles.headerContainer}>
            <Text style={[appStyles.skipHeaderText]}>Add a photo ?</Text>
          </View>
          <View>
            <TouchableOpacity onPress={pickImage}>
              <Image
                style={appStyles.profilePictureContainer}
                source={image ? { uri: image.url } : require('../../../assets/images/app/add-photo.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
         disabled={!image?.isNew}
          style={appStyles.profilePictureNextButton}
          onPress={() => {
            nextPage(image?.url || "");
          }}
        >
          
          <View style={appStyles.profilePictureButton}>
            <LinearGradient
              colors={buttonColors}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={appStyles.gradientBackground}
            >
              <Text style={appStyles.signUpButtonText}>Next</Text>
            </LinearGradient>
          </View>
        </TouchableOpacity>
      </View>
    </SkipButtonWrapper>
  );
}
