package com.example.demo.service;

import com.example.demo.model.AdMetrics;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Optional;

@Service
public class AdMetricsService {
    Collection<AdMetrics> adMetricsData;

    public AdMetricsService() {
        adMetricsData = new ArrayList<>(Arrays.asList(
                new AdMetrics("Ad 1", 50, 1000),
                new AdMetrics("Ad 2", 100, 2000),
                new AdMetrics("Ad 3", 75, 1500),
                new AdMetrics("Ad 4", 120, 300),
                new AdMetrics("Ad 5", 500, 650)
        ));
    }

    public Collection<AdMetrics> getMetricsData() {
        return adMetricsData;
    }

    public void createAdMetrics(AdMetrics adMetrics) {
        adMetricsData.add(adMetrics);
    }

    public Optional<AdMetrics> getAdMetricsById(String id) {
        return adMetricsData.stream()
                .filter(adMetrics -> adMetrics.getId().equals(id))
                .findFirst();
    }

    public boolean deleteAdMetricsById(String id) {
        Optional<AdMetrics> adMetricsToDelete = getAdMetricsById(id);

        if (adMetricsToDelete.isEmpty()) {
            return false;
        }

        adMetricsData.remove(adMetricsToDelete.get());
        return true;
    }

    public boolean updateAdMetrics(AdMetrics adMetrics) {
        Optional<AdMetrics> adMetricsToUpdate = getAdMetricsById(adMetrics.getId());

        if (adMetricsToUpdate.isEmpty()) {
            return false;
        }

        adMetricsToUpdate.get().setAdName(adMetrics.getAdName());
        adMetricsToUpdate.get().setViews(adMetrics.getViews());
        adMetricsToUpdate.get().setClicks(adMetrics.getClicks());

        return true;
    }
}