import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/Routes";
import { SafeAreaView, StatusBar } from "react-native";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
