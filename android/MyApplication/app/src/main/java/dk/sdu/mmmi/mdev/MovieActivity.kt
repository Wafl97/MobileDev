package dk.sdu.mmmi.mdev

import android.content.Intent
import android.graphics.BitmapFactory
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.util.Log
import android.view.MenuItem
import android.widget.ImageView
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import dk.sdu.mmmi.mdev.models.MovieModel
import java.lang.Exception
import java.util.concurrent.Executors

class MovieActivity : AppCompatActivity() {

    private lateinit var imagePath: String
    private lateinit var itemImage: ImageView
    private lateinit var summary: TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_movie)
        imagePath = getString(R.string.img_path)
        val movie = intent.getSerializableExtra("MOVIE") as? MovieModel
        title = movie?.title
        supportActionBar?.setDisplayHomeAsUpEnabled(true)
        itemImage = findViewById(R.id.movie_poster)
        summary = findViewById(R.id.summary)
        summary.text = movie?.overview
        val fullPath: String = imagePath + movie?.poster_path
        val handler = Handler(Looper.getMainLooper())
        val executor = Executors.newSingleThreadExecutor()
        executor.execute {
            try {
                val `in` = java.net.URL(fullPath).openStream()
                val image = BitmapFactory.decodeStream(`in`)
                handler.post{
                    itemImage.setImageBitmap(image)
                }
            }
            catch (e: Exception) {
                Log.e("Error", e.message.toString())
            }
        }
    }

    override fun onContextItemSelected(item: MenuItem): Boolean {
        startActivity(Intent(this@MovieActivity, MainActivity::class.java))
        return super.onContextItemSelected(item)
    }
}