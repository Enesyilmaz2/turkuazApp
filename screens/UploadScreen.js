import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const UploadScreen = () => {
  const [comment, setComment] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = () => {
    // Logic for image upload goes here
  };

  const handlePostShare = () => {
    // Logic for sharing the post goes here
  };

  return (
    <View style={styles.container}>
      <View style={styles.uploadContainer}>
        <TouchableOpacity
          onPress={handleImageUpload}
          style={styles.imageUploadButton}
        >
          <Text style={styles.uploadText}>Resim Yükle</Text>
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={styles.imagePreview} />}
        <TextInput
          style={styles.commentInput}
          placeholder="Yorumunuzu yazın..."
          value={comment}
          onChangeText={setComment}
        />
        <TouchableOpacity onPress={handlePostShare} style={styles.shareButton}>
          <Text style={styles.shareText}>Paylaş</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
  },
  uploadContainer: {
    backgroundColor: "#adf3f0",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
  },
  imageUploadButton: {
    backgroundColor: "#5ae8e2",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 15,
  },
  uploadText: {
    color: "white",
    fontSize: 16,
  },
  imagePreview: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    padding: 10,
    width: "100%",
    marginBottom: 15,
  },
  shareButton: {
    backgroundColor: "#ff7f50",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  shareText: {
    color: "white",
    fontSize: 16,
  },
});

export default UploadScreen;
