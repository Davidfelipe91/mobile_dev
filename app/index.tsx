import { Redirect } from "expo-router";
import React from "react";

const App = () => {

  return (
    // <SafeAreaView>
    //   <Text>App</Text>
    //   <Text>App</Text>
    //   <Text>App</Text>
    //   <Text>App</Text>
    //   <Link href="/login">LOGIN</Link>
    // </SafeAreaView>
    <Redirect href="/main-screen"/>
  );
};

export default App;
