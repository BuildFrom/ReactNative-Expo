import { View, StyleSheet } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { Button } from "@/components/Button";

export default function ProfileScreen() {
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded);

  return (
    <View style={styles.container}>
      <Button title="Back to onboarding" onPress={toggleHasOnboarded} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
});
