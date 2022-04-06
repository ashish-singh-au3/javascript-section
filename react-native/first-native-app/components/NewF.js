import React, { useState } from "react";
import { Button, View, Text } from "react-native";

function NewF() {
  const [count, setCount] = useState(4);

  function incr() {
    setCount(count + 1);
  }

  return (
    <View>
      <Button onPress={incr} title="+" />
      <Text>Count : {count}</Text>
    </View>
  );
}

export default NewF;
