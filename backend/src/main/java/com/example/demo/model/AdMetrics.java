package com.example.demo.model;

import java.util.UUID;

public class AdMetrics {
    private final String id;
    private String adName;
    private int clicks;
    private int views;
    private String[] tags;
    private int bought;
    private int hovered;

    public AdMetrics(String adName, int clicks, int views, String[] tags, int bought, int hovered) {
        this.bought = bought;
        this.hovered = hovered;
        this.id = UUID.randomUUID().toString();
        this.adName = adName;
        this.clicks = clicks;
        this.views = views;
        this.tags = tags;
    }

    public AdMetrics(AdMetrics other, int hovered) {
        this.id = other.id;
        this.adName = other.adName;
        this.clicks = other.clicks;
        this.views = other.views;
        this.tags = other.tags;
        this.bought = other.bought;
        this.hovered = hovered;
    }

    public String getId() {
        return id;
    }

    public String getAdName() {
        return adName;
    }

    public void setAdName(String adName) {
        this.adName = adName;
    }

    public int getClicks() {
        return clicks;
    }

    public void setClicks(int clicks) {
        this.clicks = clicks;
    }

    public int getViews() {
        return views;
    }

    public void setViews(int views) {
        this.views = views;
    }

    public String[] getTags() {
        return tags;
    }

    public void setTags(String[] tags) {
        this.tags = tags;
    }

    public int getBought() {
        return bought;
    }

    public void setBought(int bought) {
        this.bought = bought;
    }

    public int getHovered() {
        return hovered;
    }

    public void setHovered(int hovered) {
        this.hovered = hovered;
    }
}
