## SwipeableFlatList侧滑

### 属性

- ` renderQuickActions?: ?(rowData, sectionID, rowID) => ?React.Element<any> `

**用于创建侧滑菜单**

- ` maxSwipeDistance?: ?PropTypes.number|Proptypes.func `

**这只最大滑动距离**

- ` bounceFirstRowOnMount?: boolean `

**默认false, 如果设置true第一行向左滑动，然后再向后移动以向用户显示该行滑动**