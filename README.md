react-motion: use spring component for animation. Transition from a defaultValue to an endValue.

# Example

```
<Motion defaultStyle={{x: 0}} style={{x: spring(360)}}>
 return <div style={style}>{val.x}</div>
      }}
</Motion>
```
