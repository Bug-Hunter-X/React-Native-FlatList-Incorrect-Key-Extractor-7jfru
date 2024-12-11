const uniqueKey = require('uuid').v4; //Use a UUID library

const data = [{
  id: uniqueKey(),
  name: 'Item 1'
}, {
  id: uniqueKey(),
  name: 'Item 2'
}, {
  id: uniqueKey(),
  name: 'Item 3'
}];

<FlatList
  data={data}
  keyExtractor={(item) => item.id} // Use the unique ID as the key
  renderItem={({ item }) => <Text>{item.name}</Text>}
/>