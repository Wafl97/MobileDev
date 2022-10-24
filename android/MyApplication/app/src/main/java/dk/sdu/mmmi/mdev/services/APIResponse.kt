package dk.sdu.mmmi.mdev.services

import dk.sdu.mmmi.mdev.models.MovieModel

data class APIResponse(
    val page: Int,
    val results: List<MovieModel>,
    val total_pages: Int,
    val total_results: Int
)