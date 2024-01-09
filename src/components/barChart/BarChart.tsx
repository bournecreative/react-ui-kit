import React, { useEffect, useLayoutEffect, useRef } from 'react'
import * as am5 from '@amcharts/amcharts5'
import * as am5xy from '@amcharts/amcharts5/xy'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'

interface BarChartProps {
  items: any[]
  elementId: string
}

const createDataSet = (data: any) => {
  let result: { date: Date; value: number }[] = []
  data.map((item: any) => {
    result.push({ date: new Date(item['Closing Date']), value: 1 })
  })
  return result
}

export const BarChart: React.FC<BarChartProps> = ({ items, elementId }) => {
  const rootRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    const root = am5.Root.new(elementId)

    const myTheme = am5.Theme.new(root)

    root.setThemes([am5themes_Animated.new(root), myTheme])

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout,
      }),
    )

    var xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        maxDeviation: 0,
        baseInterval: {
          timeUnit: 'day',
          count: 1,
        },
        renderer: am5xy.AxisRendererX.new(root, {
          minorGridEnabled: true,
          minorLabelsEnabled: true,
        }),
        tooltip: am5.Tooltip.new(root, {}),
      }),
    )

    xAxis.set('minorDateFormats', {
      day: 'dd',
      month: 'MM',
    })

    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      }),
    )

    var series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: 'Series',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'value',
        valueXField: 'date',
        tooltip: am5.Tooltip.new(root, {
          labelText: '{valueY}',
        }),
      }),
    )

    series.columns.template.setAll({ strokeOpacity: 0 })

    series.data.setAll(items)
    series.appear(1000)
    chart.appear(1000, 100)

    return () => {
      root.dispose()
    }
  }, [items, elementId])

  return (
    <div
      style={{ width: '100%', height: '100%' }}
      ref={rootRef}
      id={elementId}
    ></div>
  )
}
