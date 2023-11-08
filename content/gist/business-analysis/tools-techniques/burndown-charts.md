---
prev: false
next: false
---

# Burndown Charts

A Burndown Chart serves as a graphical tool that depicts the remaining work or other trackable elements of a project over a defined period. This visualization technique is most commonly used in projects following an adaptive life cycle, such as Agile or Scrum methodologies.

### Context of Adaptive Life Cycle

In the context of an adaptive life cycle, Burndown Charts are particularly useful for tracking the remaining Product Backlog Items (PBIs) from one iteration (or sprint) to the next. Teams may also choose to track hours of work remaining or specific tasks, although this can sometimes risk micromanagement.

When using adaptive life cycles, it's natural for the early iterations to surface adjustments in requirements or even introduce new PBIs. This phenomenon leads to what's often termed as a 'bump' in the Burndown Chart. Such bumps or increases in the remaining PBIs are considered typical initially, reflecting the evolving understanding of the project scope and requirements. However, a consistent upward trend in the number of remaining PBIs across multiple iterations can be a warning sign. It might suggest a need to reassess how business analysis is being conducted or the time allocated for it.

### Implications

From a business analysis perspective, the Burndown Chart can serve as a diagnostic tool. When the chart indicates stalled progress or even negative trends, it triggers an investigative response to understand the underlying issues. Such scenarios may be due to incomplete or inadequate requirement analysis, insufficient time allocated for business analysis activities, or other project-specific factors.

For instance, a slowdown in the rate at which PBIs are being completed ('team velocity') could indicate that user stories may not be well-defined, or they may not be delivering incremental value. Such insights gleaned from analyzing Burndown Charts could lead to corrective actions or changes in the business analysis approach.

### Analytical Points to Consider

- **Progress Monitoring**: Tracking how quickly PBIs are being completed or how many hours of work remain.
- **Trend Analysis**: Identifying any patterns, such as spikes or plateaus, that might signify underlying issues.

- **Team Velocity**: Monitoring the rate at which the team is completing PBIs, which could indicate efficiency or inefficiencies in the work process.

- **Requirement Volatility**: Observing how often new requirements or PBIs are added, which could indicate changes in project scope or understanding.

### Diagram

```chart
{
  "type": "line",
  "data": {
    "labels": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
    "datasets": [
      {
        "label": "Ideal",
        "backgroundColor": "rgba(255, 99, 132, 0.5)",
        "borderColor": "rgb(255, 99, 132)",
        "borderWidth": 1,
        "data": [200, 180, 160, 140, 120, 100, 80, 60, 40, 20, 0]
      },
      {
        "label": "Actual",
        "backgroundColor": "rgba(54, 162, 235, 0.5)",
        "borderColor": "rgb(54, 162, 235)",
        "borderWidth": 1,
        "data": [198, 165, 155, 150, 140, 85, 95, 80, 30, 40, 0]
      }
    ]
  },
  "options": {
    "responsive": true,
    "plugins": {
      "legend": {
        "position": "top"
      },
      "title": {
        "display": true,
        "text": "Sample Burndown Chart"
      }
    },
    "scales": {
      "y": {
        "beginAtZero": true,
        "reverse": false
      }
    }
  }
}

```

By utilizing Burndown Charts effectively, business analysts can not only track project progress but also diagnose potential issues, thereby contributing to the successful adaptation and completion of the project.
