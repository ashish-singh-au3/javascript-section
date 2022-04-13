import React, { useState } from "react";
import { Button, View, Text } from "react-native";

function NewF() {
  const [count, setCount] = useState(0);

  function incr() {
    setCount(count + 1);
  }

  return (
    <View>
      <Button onPress={incr} title="+" />

      <Button onPress={() => setCount(count - 1)} title="-" />
      <Text>Count : {count}</Text>
    </View>
  );
}

export default NewF;
