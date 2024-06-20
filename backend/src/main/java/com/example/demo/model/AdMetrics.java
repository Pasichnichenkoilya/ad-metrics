package com.example.demo.model;

import java.util.UUID;

public class AdMetrics {
    private final String id;
    private String adName;
    private int clicks;
    private int views;

    public AdMetrics(String adName, int clicks, int views) {
        this.id = UUID.randomUUID().toString();
        this.adName = adName;
        this.clicks = clicks;
        this.views = views;
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
}
