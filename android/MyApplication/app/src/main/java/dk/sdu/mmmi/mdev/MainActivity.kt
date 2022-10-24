package dk.sdu.mmmi.mdev

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import androidx.appcompat.widget.SearchView
import androidx.appcompat.widget.SearchView.OnQueryTextListener
import android.widget.Toast
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import dk.sdu.mmmi.mdev.models.MovieModel
import dk.sdu.mmmi.mdev.services.*
import dk.sdu.mmmi.mdev.viewmodels.MovieViewModel
import retrofit2.*
import java.io.Serializable

class MainActivity : AppCompatActivity() {

    private lateinit var key: String
    private lateinit var movieViewModel: MovieViewModel
    private lateinit var layoutManager: RecyclerView.LayoutManager
    private lateinit var adapter: RecyclerView.Adapter<MovieAdapter.ViewHolder>
    private lateinit var searchField: SearchView
    private lateinit var recyclerView: RecyclerView
    private lateinit var aboutButton: Button
    private var retrofitBuilder: APIFetch? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        title = getString(R.string.app_name)
        key = getString(R.string.api_key)
        movieViewModel = MovieViewModel.getInstance()
        searchField = findViewById(R.id.search_field)
        aboutButton = findViewById(R.id.about_button)
        retrofitBuilder = APIHelper.getInstance(this@MainActivity).getAPIFetch()
        searchField.setOnQueryTextListener(object : OnQueryTextListener {
            override fun onQueryTextSubmit(query: String?): Boolean {
                return true
            }

            override fun onQueryTextChange(query: String?): Boolean {
                if (query != null) {
                    updateRecyclerView(query)
                }
                return true
            }

        })

        layoutManager = LinearLayoutManager(this)
        recyclerView = findViewById(R.id.recyclerView)
        recyclerView.layoutManager = layoutManager

        initRecyclerView()
        initButton()
    }

    private fun initButton() {
        aboutButton.setOnClickListener {
            startActivity(Intent(this@MainActivity,AboutActivity::class.java))
        }
    }

    private fun updateRecyclerView(query: String) {
        movieViewModel.removeAll()
        val response = if (query == "") {
            retrofitBuilder?.getTrending(key)
        } else {
            retrofitBuilder?.getQuery(key,query)
        }!!
        updateList(response)
    }

    private fun initRecyclerView() {
        adapter = MovieAdapter(movieViewModel, this@MainActivity)
        recyclerView.adapter = adapter
        val response = retrofitBuilder?.getTrending(key)!!
        updateList(response)
    }

    private fun updateList(response: Call<APIResponse>) {
        APIHelper.resolve(response, object : SuccessCallBack {
            override fun call(results: List<MovieModel>) {
                movieViewModel.addAll(results as ArrayList<MovieModel>)
                adapter.notifyDataSetChanged()
            }
        }, object : FailureCallBack {
            override fun call() {
                movieViewModel.removeAll()
                adapter.notifyDataSetChanged()
            }
        })
    }

}