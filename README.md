# React Native FlatList Incorrect Key Extractor

This repository demonstrates a common bug in React Native's FlatList component: using an incorrect `keyExtractor` function.  Improper key extraction can lead to various issues, including incorrect rendering, poor performance, and even crashes. This example showcases the problem and provides a corrected solution.

## Bug
The `FlatList` component is not updated correctly, leading to stale data in the UI.

## Solution
Using a unique identifier as the key, either a UUID or a unique identifier provided by your backend, will correctly handle item updates and re-renders.
