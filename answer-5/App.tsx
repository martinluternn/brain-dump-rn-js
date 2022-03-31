import Checkbox from 'expo-checkbox';
import { Component } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

interface TaskData {
  id: string;
  desc: string;
  hasCompleted: boolean;
  hasModify: boolean;
}

interface Props {
  //
}

interface State {
  taskData: TaskData[]
}

class TaskList extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      taskData: []
    };
  }

  onAddTask = () => {
    const temp = this.state.taskData
    temp.push({ id: (Math.random() + 1).toString(36).substring(7), desc: 'empty note, please tap to edit', hasCompleted: false, hasModify: false })
    this.setState({ taskData: temp })
  }

  onDeleteCompletedTask = () => {
    const temp = this.state.taskData
    const count = temp.filter((data) => data.hasCompleted == true).length
    temp.forEach((value, index) => {
      if (value.hasCompleted)
        temp.splice(index, count)
    })
    this.setState({ taskData: temp })
  }

  onValueCheckboxChanged = (index: number) => {
    const temp = this.state.taskData
    temp[index].hasCompleted = !temp[index].hasCompleted
    this.setState({ taskData: temp })
  }

  onChangeTaskChanged = (index: number, text: string) => {
    const temp = this.state.taskData
    temp[index].hasModify = true
    temp[index].desc = ""
    this.setState({ taskData: temp })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ width: '100%', color: '#000000', marginTop: 40, fontSize: 14, fontWeight: 'bold', padding: 20 }}>Task List App</Text>
        <View style={{ width: '100%', flex: 1 }}>
          <FlatList
            style={{ flex: 1 }}
            data={this.state.taskData}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => {
              const _item: TaskData = item as TaskData;
              return (
                <View>
                  <View style={{ flex: 1, width: '100%', flexDirection: 'row', padding: 20 }}>
                    <Checkbox value={_item.hasCompleted} onValueChange={() => this.onValueCheckboxChanged(index)} />
                    <TextInput onChangeText={(text: string) => this.onChangeTaskChanged(index, text)} style={[{ fontSize: 14, marginStart: 8 },
                    !_item.hasModify ? { fontStyle: 'italic' } : { fontStyle: 'normal' }, _item.hasCompleted && { textDecorationLine: 'line-through', textDecorationStyle: 'solid' }]}>{_item.desc}</TextInput>
                  </View>
                  <View style={{ backgroundColor: 'lightgrey', height: 2 }} />
                </View>
              );
            }}
          />
        </View>
        <View style={{ flexDirection: 'row', width: '100%', padding: 20 }}>
          <View style={{ flex: 1 }}><Button title="ADD" onPress={this.onAddTask} /></View>
          <View style={{ flex: 1 }}><Button title="CLEAR" onPress={this.onDeleteCompletedTask} /></View>
        </View>
      </View>
    )
  }
}

export default (TaskList)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
